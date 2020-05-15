import React from 'react'
import contStyle from '../styles/pages/contact.module.css'
// import logoIcon from '../src/static/svg/logo/logoW.svg'

const Contact = (props) => {
    return (
        <div>
            <h1 className={contStyle.test}>Contact</h1> 
            <img src="/svg/websites/facebook.svg" alt="fb" />
            {/* <div className="navbar-height" />
            <div className={contStyle.contacts-container}>
                <div className={contStyle.contact-container}>
                    <Link to="/user/SebastianSosa" className={`${contStyle.contact-header} neutralize-link`}>
                        <img src='/svg/logo/logoW.svg' className={contStyle.CH-icon} alt="ProjectU" />
                        <h3 className={contStyle.CH-name}>Sebastian Sosa</h3>
                    </Link>
                    <img src="https://i.imgur.com/zgwIwOS.png" className={contStyle.profile-image} alt="profile" />
                    <div className={contStyle.contact-info-container}>
                        <div className={contStyle.contact-info} style={{backgroundColor: '#f6f6f9'}}><strong>position:</strong> founder, full stack developer</div>
                        <div className={contStyle.contact-info}><strong>email:</strong> 1sebastian1sosa1@gmail.com</div>
                        <div className={contStyle.contact-info}><strong>phone:</strong> +1 786-270-7297</div>
                    </div>
                </div>
                <div className={contStyle.contact-container}>
                    <Link to="/user/nesutortik" className={`${contStyle.contact-header} neutralize-link`}>
                        <img src={logoIcon} className={contStyle.CH-icon} alt="ProjectU" />
                        <h3 className={contStyle.CH-name}>Umyarov Mikhail</h3>
                    </Link>
                    <img src="https://i.imgur.com/ew81eQe.png" className={contStyle.profile-image} alt="profile" />
                    <div className={contStyle.contact-info-container}>
                        <div className={contStyle.contact-info} style={{backgroundColor: '#f6f6f9'}}><strong>position:</strong> UI/UX designer</div>
                        <div className={contStyle.contact-info}><strong>email:</strong> silverusdragonitos@yandex.ru</div>
                        <div className={contStyle.contact-info}><strong>phone:</strong> +7 952-156-96-49</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

// export async function getStaticProps(context) {
//     return {
//         props: {
//             context
//         }
//     }
// }

// const mapStateToProps = (state) => {
// 	return {
//         alertNotif: state.alertNotif
// 	}
// }
// export default connect(
//     mapStateToProps
// )(Contact)
export default Contact