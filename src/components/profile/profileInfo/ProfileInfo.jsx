import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defaultUserPhoto from '../../../asserts/images/user_default_icon.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return (
            <Preloader/>
        );
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    let contacts = profile.contacts;
    return (
        <div>
            <div className={style.descriptionBlock}>
                <div>
                    <span>
                        <img
                            src={profile.photos.large || defaultUserPhoto}
                            className={style.mainPhoto}
                        />
                        {
                            isOwner &&
                            <input
                                type={'file'}
                                onChange={onMainPhotoSelected}
                            />
                        }
                    </span>
                    <ProfileStatusWithHooks
                        status={status}
                        updateStatus={updateStatus}
                    />
                    <span>
                        <span>
                            {profile.fullName}
                        </span>
                        <div>
                            {profile.aboutMe}
                        </div>
                    </span>

                </div>
                <div>
                    <div>
                        <div>
                            My contacts
                        </div>
                        <div>
                            <div>{contacts.facebook}</div>
                            <div>{contacts.twitter}</div>
                            <div>{contacts.github}</div>
                        </div>

                    </div>
                    <div>
                        I'm looking for a job:
                        {
                            profile.lookingForAJob ? <span>Yes!</span> : <span>No!</span>
                        }
                    </div>

                    Here will be more description...
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;