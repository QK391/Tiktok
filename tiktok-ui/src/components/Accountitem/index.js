import classNames from "classnames/bind";
import styles from "./Accountitem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Accountitem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ab269e382e333d73e85a09bbc82905b1~c5_100x100.jpeg?x-expires=1689004800&x-signature=q3Zu%2BdZ%2BIqlw7QegCxE49H2O9Rw%3D" alt=""/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Nguyen Van B</span>
            </div>
        </div>
    );
}

export default Accountitem;