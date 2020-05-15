import React from 'react';
import UP from '../styles/pages/userPage.module.css';

const UserPage = (props) => {
  //   const [currentUser, setCurrentUser] = useState(null)
  //   const message = useField('text')
  //   const decodedUser = decodeURIComponent(props.userUsername)
  //   const userQuery = useQuery(FIND_USER, {
  //     variables: {username: decodedUser}
  //   })
  //   const onError = (e) => {
  //     const eMessage = e.message
  //     if (eMessage.includes('Path `message` (')) {
  //       triggerAlert('warning', `message$: message of ${message.fields.value.length} characters cannot be more than 800 characters`, props.setAlert, props.resetAlert)
  //     }
  //   }
  //   const [sendMessage] = useMutation(MAKE_NOTIFICATION, {
  //     onError
  //   })
  //   const handleMessage = async () => {
  //     if (!message.fields.value.length) {
  //       triggerAlert('warning', `message$: message field is required`, props.setAlert, props.resetAlert)
  //       return null
  //     }
  //     const result = await sendMessage({
  //         variables: {
  //             userFromId: props.currentUser._id,
  //             userToId: currentUser._id,
  //             message: message.fields.value,
  //         }
  //     })
  //     if (result) {
  //         message.reset()
  //         triggerAlert('success', `sent: message has been sent to ${currentUser.username}`, props.setAlert, props.resetAlert)
  //     }
  // }

  //   const userConditions = () => {
  //     const query = userQuery.data
  //     const reducer = currentUser
  //     if (!query) return null
  //     if (!query.findUser) return null
  //     if (!reducer || reducer.username !== query.username) return query.findUser
  //     return null
  //   }

  //   const user = userConditions()
  //   useEffect(() => {
  //     if (user) {
  //       setCurrentUser(user)
  //     }
  //   }, [user, setCurrentUser])
  //   if (!currentUser) {
  //     return (
  //       <div>
  //           <div style={{height: '15vh'}}/>
  //           <Loading />
  //       </div>
  //     )
  //   }
  //   const pallette = palletteGenerator("rgb(40,40,40)").colorPallette
    return (
      <h1 className={UP.test}>UserPage.js</h1>
        // <div className={UP.UP-container}>
        //   <div className="navbar-height" style={{gridColumn: '1/3'}} />
        //   <div className={UP.UP-content}>
        //     <div className={UP.UP-title-container}>
        //       <img className={UP.UP-title-icon} src='/svg/userB.svg' alt="user" />
        //       <h2 className={UP.UP-title}>{currentUser.username}</h2>
        //     </div>
        //     <h3 className={UP.UP-title} style={{opacity: '0.8'}}>profile link</h3>
        //     <ReferenceLink rl={currentUser.referenceLink} />
        //     <h2 className={UP.UP-title}>posts</h2>
        //     <div className={UP.UP-posts-container}>
        //       <PostSmallList posts={currentUser.posts} />
        //     </div>
        //   </div>
        //     <FormContainer pallette={pallette} >
        //           <h3 className="form-title">contact {currentUser.username}</h3>
        //           <h4 className="form-title-secondary">message</h4>
        //           <div className="form-field-container">
        //             <textarea className="form-field" {...message.fields} />
        //           </div >
        //           <div className="form-submit-button-container">
                    
        //           <h4 onClick={() => handleMessage()} className="form-submit-button">send</h4>
        //           </div>
        //     </FormContainer>
        // </div>
    )
}

// const mapStateToProps = (state) => {
// 	return {
//     currentUser: state.currentUser        
// 	}
// }
// export default connect(
//   mapStateToProps,
//   {setAlert, resetAlert}
// )(UserPage)

export default UserPage; 

// uses formContainer.css