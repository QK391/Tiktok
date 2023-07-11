import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountitem from '../../../Accountitem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Header() {
    const [searchResunlt, setSearchResunlt] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResunlt([]);
        }, 0);
    }, [])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />

            <Tippy interactive
            visible= {searchResunlt.length > 0} 
            render={(attrs) => (
               
                <div className={cx('search-result')} tabIndex="-1"{...attrs}>
                   <PopperWrapper>
                    <h4 className={cx('search-title')}>
                        Accounts
                    </h4>
                    <Accountitem/>
                    <Accountitem/>
                    <Accountitem/>
                    <Accountitem/>
                    <Accountitem/>
                    </PopperWrapper>
                </div>
               
            )}>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' />

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text> Upload </Button>
                <Button primary> Log in </Button>

            </div>
        </div>
    </header>;
}
export default Header;