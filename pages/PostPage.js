import React from 'react'
import ppStyle from '../styles/pages/newPostPage.module.css'

const PostPage = (props) => {
    // const [currentPost, setCurrentPost] = useState({
    //     title: 'Unilous ',
    //     description: `
    //     Unilous is a tool for anyone looking to build a team. It expands your network to all of our users so that if there is mutual interest between the post creator and the visitor they can team up. From there the team should be primed to execute whatever the goal of their post may be. Alternatively, it can also serve as a project page for recruiting people outside of Unilous.

    //     Features
    //     Unilous central feature is a user's ability to join another’s team through their post. This feature streamlines the team-building process.
    //     The post is how the user communicates his/her idea to visitors. To clarify the description of the idea, Unilous also offers a question and answer feature. It displays all answered posts, this will help clarify the objective of the post when all else fails.
        
    //     How Unilous came to be
    //     I was working on an iteration of Unilous where the objective was far more ambitious than what it is today. As I was working on it I came to understand that to execute the project I could not go about it alone. Consequently, I turned to networking, unfortunately, since my network is somewhat thin I turned to other sites but none of them were effective.
    //     As a result, the idea dawned on me, using the frame of what I have already built I will fill this void for simplistic team-building sites. This could not only serve other people with similar struggles, but for myself as well, as I (hopefully joined by others in the future) continue to build Unilous into a fantastic product.
        
    //     Join Unilous (or any other post)
    //     1. Register
    //     2. (on the right side) Pick a skill to which you can contribute
    //     3. Join!
        
    //     Contact us
    //     Send http://localhost:3000/user/Unilous a message or to contact us directly visit https://www.unilous.com/contact. 
        
    //     Donate
    //     Did we help? Feeling generous?
    //     Help us improve Unilous, support our Patreon https://www.patreon.com/unilous?fan_landing=true        
    //     `,
    //     skillNames: ['react (es6)', 'node.js', 'ui/ux designer', 'mopngodb'], skillFills: [0, 0, 0, 0], skillCapacities: [4, 2, 2, 1],
    //     user: {username: 'Unilous', _id: 'fake'},
    //     color: 'rgb(40,40,40)',
    //     team: [],
    //     referenceLinks: [],
    //     imageLinks: [],
    //     time: '1587744163174',
    //     _id: 'fakest'
    // })
    // const [skillExpanded, setSkillExpanded] = useState(null)
    // const question = useField('text')
    // const message = useField('text')
    // const onJoinError = (e) => {
    //     if (e.message.includes('is longer than the maximum allowed length')) {
    //         triggerAlert('warning', `message$: message of ${message.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert)
    //     }
    // }
    // const onQuestionError = (e) => {
    //     if (e.message.includes('is longer than the maximum allowed length')) {
    //         triggerAlert('warning', `question$: question of ${question.fields.value.length} characters exceeded the maximum of 800 characters.`, props.setAlert, props.resetAlert)
    //     }
    // }
    // const onFollowError = (e) => {
    //     console.log(e)
    // }

    // const [followMutation] = useMutation(SAVE_POST, {
    //     onError: onFollowError
    // })
    // const [makeNotification] = useMutation(MAKE_NOTIFICATION, {
    //     onError: onJoinError
    // })
    // const [askQuestion] = useMutation(ASK_QUESTION, {
    //     onError: onQuestionError
    // })

    // const handleFollow = async () => {
    //     if (!props.token) {
    //         triggerAlert('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert)
    //     }
    //     const result = await followMutation({
    //         variables: {
    //             user: props.currentUser._id,
    //             postId: currentPost._id
    //         }
    //     })

    //     if (result) {
    //         props.setCurrentUserSP(props.currentUser.savedPosts.concat(currentPost))
    //         triggerAlert('success', 'followed$: you are now following this post', props.setAlert, props.resetAlert)
    //     }
    // }
    
    // const qandaQuery = useQuery(Q_AND_A_NOTIFS, {
    //     variables: {title: decodeURIComponent(props.postTitle)}
    // })
    // const postQuery = useQuery(FIND_POST, {
    //     variables: {title: decodeURIComponent(props.postTitle)}
    // })
    // const qandaChangeConditions = () => {
    //     const query = qandaQuery.data
    //     const reducer = currentPost
    //     if (!query) return null
    //     if (!query.searchAnsweredQToPost) return null
    //     if (!reducer) return null
    //     if (reducer.qanda) return null
    //     return query.searchAnsweredQToPost
    // }
    // const postChangeConditions = () => {
    //     const query = postQuery.data
    //     const reducer = currentPost
    //     if (!query) return null
    //     if (!query.findPost) return null
    //     if (reducer) {
    //         if (reducer.title === query.findPost.title) return null
    //     }
    //     return query.findPost
    // }
    // const qanda = qandaChangeConditions()
    // const post = postChangeConditions()
    // useEffect(() => {
    //     if (qanda) {
    //         setCurrentPost({...currentPost, qanda})
    //     }
    //     if (post) {
    //         setCurrentPost(post)
    //     }
    // }, [qanda, post, setCurrentPost, currentPost])
    // if (!currentPost) {
    //     return <Loading />
    // }

    // let cleanedTime = new Date(Number(currentPost.time))
    // cleanedTime = cleanedTime.toString().split(' ')
    // // cleanedTime = cleanedTime.slice(1,4).join(' ') + ' ' + cleanedTime[4].split(':').slice(0,2).join(':')
    // cleanedTime = cleanedTime.slice(1,3).join(' ') + ', ' + cleanedTime[3]

    // let qandaList = currentPost.qanda ? currentPost.qanda.map(i => <PostQandA qanda={i} key={`QandA${i.question}`} />) : <Loading />
    // qandaList = qandaList.length ? qandaList : <div className={ppStyle.qanda-text}>no question and answer pairs yet</div>
    // const skillsHTML = []
    // const questionStyle = skillExpanded ? {display: 'none'} : {display: 'block'}
    // const handleNotification = async (proposedContribution) => {
    //     if (!props.currentUser) {
    //         triggerAlert('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (!message.fields.value.length) {
    //         triggerAlert('warning', `message$: message field is required`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     const result = await makeNotification({
    //         variables: {
    //             userFromId: props.currentUser._id,
    //             userToId: currentPost.user._id,
    //             message: message.fields.value,
    //             postId: currentPost._id,
    //             proposedContribution
    //         }
    //     })
    //     if (result) {
    //         setSkillExpanded(null)
    //         message.reset()
    //         triggerAlert('success', `sent$: (check your answered notifications for the response) request has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert)
    //     }
    // }
    // for (const ins in currentPost.skillNames) {
    //     const skillName = currentPost.skillNames[ins]
    //     const skillFill = currentPost.skillFills[ins]
    //     const skillCap = currentPost.skillCapacities[ins]
    //     const messageStyle = skillExpanded === skillName ? {display: 'block'} : {display: 'none'}
    //     const buttonToShown = skillExpanded === skillName ?
    //         <h4 onClick={() => setSkillExpanded(null)} className={ppStyle.PPS-button-exit}>X</h4>
    //         :
    //         skillFill < skillCap ?
    //             <h4 onClick={() => setSkillExpanded(skillName)} className={ppStyle.PPS-button-exit}>join</h4>
    //             :
    //             <h4 className={ppStyle.PPS-button-disabled}>join</h4>

    //     const skillProposition = Array(currentPost.skillNames.length).fill(0)
    //     skillProposition[ins] = 1
    //     skillsHTML.push( 
    //         <div className={ppStyle.PPS-skill} key={`PPSS${skillName}`}>
    //             <div className={ppStyle.PPS-division} />
    //             <p className={ppStyle.PPS-skill-name}>{skillName}</p>
    //             <div className={ppStyle.PPS-skill-secondary}>
    //                 <p className={ppStyle.PPS-skill-info}>{skillFill}/{skillCap}</p>
    //                 {buttonToShown}
    //             </div>
    //             <div className={ppStyle.PPS-skill-form} style={messageStyle}>
    //                 <div className={ppStyle.PPS-title}>
    //                     <InputHeader inputFor={ppStyle.PPS-message} info={false} title="message" color="white" />
    //                 </div>
    //                 <div className={ppStyle.PPS-input-container}>
    //                     <textarea className={ppStyle.PPS-input} id="PPS-message" {...message.fields}></textarea>
    //                 </div>
    //                 <div className="PPC-submit-container">
    //                     {<h4 onClick={() => handleNotification(skillProposition)} className={ppStyle.PPS-button} style={{borderColor: currentPost.color}}>join</h4>}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // const handleQuestion = async () => {
    //     if (!props.currentUser) {
    //         triggerAlert('warning', `sign in$: must be signed in to perform this action`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (!question.fields.value.length) {
    //         triggerAlert('warning', `question$: question field is required`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     const result = await askQuestion({
    //         variables: {
    //             userFromId: props.currentUser._id,
    //             userToId: currentPost.user._id,
    //             postId: currentPost._id,
    //             question: question.fields.value
    //         }
    //     })
    //     if (result) {
    //         question.reset()
    //         triggerAlert('success', `sent$: (check your answered notifications for the response) question has been sent to ${currentPost.user.username}`, props.setAlert, props.resetAlert)
    //     }
    // }
    // const pallette = palletteGenerator(currentPost.color).colorPallette

    // const teamHTML = currentPost.team ? currentPost.team.map(un =>
    //     <Link to={`/user/${un}`} className={ppStyle.PPC-user-container neutralize-link} key={`PT${un}`}>
    //         <img className={ppStyle.PPC-user-icon} src='/svg/userB.svg' alt="user" />
    //         <p className="NM">{un}</p>
    //     </Link>
        
    // ): null

    // const HomeContent = () => {
    //     if (props.home) {
    //         return (
    //             <div className={ppStyle.home-options}>
    //                 <Link to="/browse/" className={`${ppStyle.home-option} neutralize-link`} style={{backgroundColor: '#282828'}}>
    //                     <img src='/svg/searchWW.svg' className={ppStyle.home-option-icon} alt="search" />
    //                     <h3 className={ppStyle.home-option-text}>browse all</h3>
    //                 </Link>
    //                 <Link to="/post-form/" className={`${ppStyle.home-option} neutralize-link`} style={{backgroundColor: 'rgb(52,166,95)'}}>
    //                     <img src='/svg/plusW.svg' className={ppStyle.home-option-icon} alt="add" />
    //                     <h3 className={ppStyle.home-option-text}>add project</h3>
    //                 </Link>
    //                 <a href="https://discord.gg/v7vFc9U" className={`${ppStyle.home-option} ${ppStyle.home-option-highlight} neutralize-link`} style={{backgroundColor: '#7289DA'}}>
    //                     <img src='/svg/websites/discord.svg' className={ppStyle.home-option-icon} alt="Discord" />
    //                     <h3 className={ppStyle.home-option-text}>community discord</h3>
    //                 </a>
    //             </div>
    //         )
    //     }
    //     else {
    //         return null
    //     }
    // }

    // const ModifiedDescription = () => {
    //     const spacedDis = currentPost.description.split(' ')
    //     for (const i in spacedDis) {
    //         if (spacedDis[i].includes('https://')) {
    //             spacedDis[i] = `<a href="${spacedDis[i]}" class="p-link neutralize-link">${spacedDis[i]}</a>`
    //         }
    //         if (spacedDis[i].includes('http://')) {
    //             spacedDis[i] = `<a href="${spacedDis[i]}" class="p-link neutralize-link">${spacedDis[i]}</a>`
    //         }
    //     }
    //     const finalDis = spacedDis.join(' ')
    //     return <p className="PPC-description" dangerouslySetInnerHTML={{__html: finalDis}} />
    // }
    // const skillCap = currentPost.skillCapacities.reduce((n, t) => t + n, 0)
    // const skillFill = currentPost.skillFills.reduce((n, t) => t + n, 0)
    // const titleKeywords = () => {
    //     let title = currentPost.title
    //     title = title.split(' ')
    //     let keywords = title.map(w => {
    //         if (w.slice(0, 1).toUpperCase() === w.slice(0, 1) && w.slice(0, 1).toLowerCase() === w.slice(0, 1)) return null
    //         if (w.slice(0, 1).toUpperCase() === w.slice(0, 1)) return w + ','
    //         return null
    //     })
    //     keywords = keywords.length ? keywords.join(' ') : title[0] + ', '
        
    //     return keywords
    // }
    
    // <Helmet>
    //     <title>{currentPost.title}</title>
    //     <meta name="author" content={currentPost.user.username} />
    //     <meta name="description" content={`Join the project, be part of "${currentPost.title}" team! So far ${skillFill} awesome people have joined, there are only ${skillCap - skillFill} slots left.`} />
    //     <meta name="keywords" content={`${titleKeywords()} build, team`} />
    // </Helmet>
    return (
        <div>
            <h1 className={ppStyle.test}>PostPage</h1>
            {/* <div className="navbar-height" />
            <div className={ppStyle.post-page-container}>
                <div className={ppStyle.PP-content}>
                    <HomeContent />
                    <h2 className={ppStyle.PPC-title}>{currentPost.title}</h2>
                    <div className={ppStyle.PPC-sub-header}>
                        <Link to={`/user/${currentPost.user.username}`} className={`${ppStyle.PPC-user-container} neutralize-link`}>
                            <img className={ppStyle.PPC-user-icon} src='/svg/userB.svg' alt="user" />
                            <p className="NM">{currentPost.user.username}</p>
                        </Link>
                        <p className={ppStyle.PPC-time}>{cleanedTime}</p>
                    </div>
                    <ModifiedDescription />
                    <PostImages imageLinks={currentPost.imageLinks} color={currentPost.color} />
                    <PostLinks referenceLinks={currentPost.referenceLinks} />
                    <h3 className={ppStyle.PPC-title}>Q and A</h3>
                    <div className={ppStyle.PPC-all-qanda-container}>
                        {qandaList}
                    </div>
                    <h3 className={ppStyle.PPC-title}>team</h3>
                    <div className={ppStyle.team-info}>{teamHTML.length} team members</div>
                    <div className={ppStyle.PPC-team-container}>
                        {teamHTML}
                    </div>
                </div>
                <FormContainer pallette={pallette}>
                    <div  className={ppStyle.PPS-follow-header} >
                        <div onClick={() => handleFollow()} className={ppStyle.PPS-follow-header} style={{borderTop: '2px solid currentPost.color'}}>
                            <svg className={ppStyle.PPC-user-icon} fill={currentPost.color} viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
                            <p className="NM">follow</p>
                        </div>
                    </div>
                    {skillsHTML}
                    <div style={questionStyle}>
                        <div className={ppStyle.PPS-division} />
                        <div className={ppStyle.PPS-title}>
                            <InputHeader inputFor="PPS-question" info={true} title="question" color="white" >
                                <ul style={{margin: 0}}>
                                    <li>if answered it will be shown on post</li>
                                </ul>
                            </InputHeader>
                        </div>
                        <div className={ppStyle.PPS-input-container}>
                            <textarea className={ppStyle.PPS-input} id="PPS-question" {...question.fields}></textarea>
                        </div>
                        <div className={ppStyle.PPC-submit-container}>
                            <h4 onClick={() => handleQuestion()} className={ppStyle.PPS-button} style={{borderColor: currentPost.color}}>ask</h4>
                        </div>
                    </div>
                </FormContainer>
            </div> */}
        </div>
    )
}

// const mapStateToProps = (state) => {
// 	return {
//         currentUser: state.currentUser,
//         token: state.token
// 	}
// }
// export default connect(
//     mapStateToProps, 
//     { setAlert, resetAlert, setCurrentUserSP }
// )(PostPage)

export default PostPage
