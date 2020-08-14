import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('RpofileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'YYYYYoooooo'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('YYYYYoooooo');
    });

    test(`After creation 'span' should be displayed with correct status`, () => {
        const component = create(<ProfileStatus status={'YYYYYoooooo'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('YYYYYoooooo');
    });

    test(`After creation 'span' should be displayed with correct status`, () => {
        const component = create(<ProfileStatus status={'YYYYYoooooo'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test(`After creation 'span' should be without 'input'`, () => {
        const component = create(<ProfileStatus status={'YYYYYoooooo'}/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test(`Input should be displayed in editMode insted of span`, () => {
        const component = create(<ProfileStatus status={'YYYYYoooooo'}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');

        expect(input.props.value).toBe('YYYYYoooooo');
    });

    test(`Calllback should be called 1 time`, () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'YYYYYoooooo'} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });

});