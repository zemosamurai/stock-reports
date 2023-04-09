import Profile from '@rsuite/icons/legacy/Project';
import s from './header.module.css'

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.logo}>Stock Reports</p>
      <Profile className={s.profile}/>
    </div>
  );
};
