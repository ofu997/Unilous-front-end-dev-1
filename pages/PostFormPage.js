import React from 'react';
import PFP from '../styles/pages/postForm.module.css';

let PostFormPage = (props) => {
    // const title = useField('text')
    // const description = useField('text')
    // const [color, setColor] = useState(null)
    // const groupContactLink = useField('url')

    // const [skillName, setSkillName] = useState('')
    // const [skillNameList, setSkillNameList] = useState([])
    // const [skillCapacity, setSkillCapacity] = useState('')
    // const [skillCapList, setSkillCapList] = useState([])
    // const [imageLink, setImageLink] = useState('')
    // const [imageLinkList, setImageLinkList] = useState([])
    // const [referenceLink, setReferenceLink] = useState('')
    // const [referenceLinkList, setReferenceLinkList] = useState([])

    // const [skillProposition, setSkillProposition] = useState(null)
    // const [skillSelected, setSkillSelected] = useState(null)
    // // This is a test for form validation
    // const handleError = (e) => {
    //     const message = e.message
    //     if (message.includes('Response not successful')) {
    //         triggerAlert('warning', 'all$: title, description, color, group/contact link, skills, and contribution are all required', props.setAlert, props.resetAlert)
    //         return null 
    //     }
    //     if (message.includes('Path `title` (')) {
    //         triggerAlert('warning', `title$: title of ${title.fields.value.length} characters must only have at most 100 characters`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (message.includes('dup key: { title')) {
    //         triggerAlert('warning', `title$: ${title.fields.value} is not unique. Title must be unique`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (message.includes('duplicate description')) {
    //         triggerAlert('warning', `description$: description is not unique. Description must be unique`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (message.includes('minimum allowed length')) {
    //         triggerAlert('warning', `description$: description of ${description.fields.value.length} characters must at least have 100 characters`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (message.includes('Path `description` (')) {
    //         triggerAlert('warning', `description$: description of ${description.fields.value.length} characters must only have at most 3000 characters`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (message.includes('duplicate contactLink')) {
    //         triggerAlert('warning', `group/contact link$: ${groupContactLink.fields.value} is not unique. Group/contact link must be unique`, props.setAlert, props.resetAlert)
    //         return null
    //     }
    // }
    // const [createPost] = useMutation( CREATE_POST, {
    //     onError: handleError
    // })
    // const pallette = color ? palletteGenerator(color).colorPallette : {color: null, heigherColor: null}
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     if (!props.token) {
    //         triggerAlert('warning', 'sign in$: must be signed in to perform this action', props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     if (!skillNameList.length || !groupContactLink.fields.value.length) {
    //         triggerAlert('warning', 'all$: title, description, color, group/contact link, skills, and contribution are all required', props.setAlert, props.resetAlert)
    //         return null
    //     }
    //     let cleanedTitle = []
    //     for (const word of title.fields.value.split(' ')) {
    //         if (word.length) cleanedTitle.push(word)
    //     }
    //     const postCreated = await createPost({
    //         variables: {
    //             title: cleanedTitle.join(' '),
    //             user: props.currentUser._id,
    //             skillNames: skillNameList,
    //             skillCapacities: skillCapList,
    //             skillFills: skillProposition,
    //             description: description.fields.value,
    //             contactLink: groupContactLink.fields.value,
    //             color: color,
    //             imageLinks: imageLinkList,
    //             referenceLinks: referenceLinkList
    //         }
    //     })
    //     if (postCreated) {
    //         title.reset()
    //         description.reset()
    //         groupContactLink.reset()
    //         setSkillName('')
    //         setSkillNameList([])
    //         setSkillCapacity('')
    //         setSkillCapList([])
    //         setImageLink('')
    //         setImageLinkList([])
    //         setReferenceLink('')
    //         setReferenceLinkList([])
    //         props.history.push(`/post/${encodeURIComponent(postCreated.data.addPost.title)}`)
    //     }
    // }
    // const colors = [
    //     'rgb(199,0,57)', 'rgb(224,52,77)', 'rgb(245,165,0)', 'rgb(250,116,79)', 'rgb(246,172,200)',
    //     'rgb(16,79,37)', 'rgb(15,138,95)', 'rgb(140,186,81)', 'rgb(152,183,49)', 'rgb(127,205,145)', 
    //     'rgb(2,66,73)', 'rgb(15,76,117)', 'rgb(50,62,221)', 'rgb(1,152,173)', 'rgb(113,112,255)',  
    //     'rgb(20,20,20)', 'rgb(60,60,60)', 'rgb(133,156,177)'
    // ]
    // const colorsHTML = colors.map(c => <div onClick={() => setColor(c)} className={PFP.color-ins} style={{backgroundColor: c}} key={`PFC${c}`} />)
    // const addSkills = () => {
    //     let cleanedSkill = []
    //     for (const word of skillName.split(' ')) {
    //         if (word.length) cleanedSkill.push(word)
    //     }
    //     setSkillName(cleanedSkill.join(' '))
    //     if (Number(skillCapacity)){
    //         setSkillNameList(skillNameList.concat(skillName.toLowerCase()))
    //         setSkillName('')
    //         setSkillCapList(skillCapList.concat(Number(skillCapacity)))
    //         setSkillCapacity('')
    //         setSkillProposition(null)
    //         setSkillSelected(null)
    //     }
    // }
    // const removeSkill = (ind) => {
    //     const newSkillNameList = []
    //     for (const i in skillNameList) {
    //         if (i !== ind) { newSkillNameList.push(skillNameList[i]) }
    //     }
    //     setSkillNameList(newSkillNameList)
    //     const newSkillCapList = []
    //     for (const i in skillCapList) {
    //         if (i !== ind) { newSkillCapList.push(skillCapList[i]) }
    //     }
    //     setSkillCapList(newSkillCapList)
    //     const newSkillProposition = []
    //     for (const i in props.skillProposition) {
    //         if (i !== ind) { newSkillProposition.push(props.skillProposition[i]) }
    //     }
    // }
    
    // const removeImage = (ind) => {
    //     const newImageLinkList = []
    //     for (const i in imageLinkList) {
    //         if (i !== ind) { newImageLinkList.push(imageLinkList[i]) }
    //     }
    //     setImageLinkList(newImageLinkList)
    // }
    
    // const addImage = () => {
    //     if (imageLink.includes('https://') || imageLink.includes('http://')) {
    //         setImageLinkList(imageLinkList.concat(imageLink))
    //         setImageLink('')
    //     }
    // }

    // const removeRL = (ind) => {
    //     const newReferenceLinkList = []
    //     for (const i in referenceLinkList) {
    //         if (i !== ind) { newReferenceLinkList.push(referenceLinkList[i]) }
    //     }
    //     setReferenceLinkList(newReferenceLinkList)
    // }

    // const addRL = () => {
    //     if (referenceLink.includes('https://') || referenceLink.includes('http://')) {
    //         setReferenceLinkList(referenceLinkList.concat(referenceLink))
    //         setReferenceLink('')
    //     }
    // }

    // const skillsHTML = () => {
    //     let skillsHTML = []
    //     for (const ind in skillNameList) {
    //         skillsHTML.push(
    //             <div className={PFP.PF-skill-wrapper} key={`PFS${skillNameList[ind]}`}>
    //                 <div className={PFP.PF-skill-container}>
    //                     <div className={PFP.PF-skill-name}>{skillNameList[ind]}</div>
    //                     <div className={PFP.PF-skill-cap}>{skillCapList[ind]}</div>
    //                 </div>
    //                 <div className={PFP.PF-skill-remove} onClick={() => removeSkill(ind)}>x</div>
    //             </div>
    //         )
    //     }
    //     return skillsHTML
    // }

    // const skillContribution = () => {
    //     if (!skillNameList.length) {
    //         return <h4 className={PFP.PF-input-title} style={{opacity: 0.7}}>must add skill first</h4>
    //     }

    //     const handleSkillSelect = (i) => {
    //         const skillArray = Array(skillNameList.length).fill(0)
    //         skillArray[i] = 1
    //         setSkillProposition(skillArray)
    //         setSkillSelected(skillNameList[i])
    //     }

    //     const skillMap = []
    //     for (const i in skillNameList) {
    //         const skillClass = skillSelected === skillNameList[i] ?
    //             'PFP.skill-selected' : 'PFP.skill-normal'
    //         skillMap.push(
    //             <h4 onClick={() => handleSkillSelect(i, skillNameList[i])} className={skillClass} key={`SKILL${i}`}>{skillNameList[i]}</h4>
    //         )
    //     }

    //     return (
    //         <div className={PFP.skills-container}>
    //             {skillMap}
    //         </div>
    //     )
    // }

    // const imagesHTML = () => {
    //     const allImages = []
    //     for (const ind in imageLinkList) {
    //         allImages.push(
    //             <div className={PFP.PF-image-display-container} key={`IL${ind}`}>
    //                 <img className={PFP.PF-image-display} src={imageLinkList[ind]} alt={`(${imageLinkList[ind]}) failed to load`} key={`IL${imageLinkList[ind]}`} />
    //                 <div onClick={() => removeImage(ind)} className={PFP.PF-skill-remove} style={{height: '75px', lineHeight: '70px'}} >x</div>
    //             </div>
    //         )
    //     }
    //     return allImages.map(img => img)
    // }

    // const referenceLinksHTML = () => {
    //     const allRL = []
    //     for (const ind in referenceLinkList) {
    //         allRL.push(
    //             <div className={PFP.PF-link-container} key={`RL${ind}`}>
    //                 <a href={referenceLinkList[ind]} className={PFP.PF-reference-link neutralize-link}>{referenceLinkList[ind].split('/')[2]}</a>
    //                 <div onClick={() => removeRL(ind)} className={PFP.PF-skill-remove} style={{lineHeight: '30px'}}>x</div>
    //             </div>
    //         )
    //     }
    //     return allRL.map(rl => rl)
    // }
    // const groupCommType = () => {
    //     const siteStats = websiteStats(groupContactLink.fields.value)
    //     return (
    //         <React.Fragment>
    //             <a className={PFP.GCL-type} href={groupContactLink.fields.value} title={siteStats.title} style={{backgroundColor: siteStats.color}}><img className="GCL-image" src={siteStats.icon} alt={siteStats.title} /></a>
    //             <input className={PFP.PF-search-input-normal} id="PF-GC-Link" {...groupContactLink.fields} style={{marginBottom: 0, borderColor: siteStats.color}} />
    //         </React.Fragment>
    //     )
    // }
    // const signInWarning = props.token ? null : (
    //     <h3 className="warning-container">must be signed in to add post</h3>
    // )
    // const onSuggestionClicked = (skill) => {
    //     const skillToEnter = `${skill} `
    //     setSkillName(skillToEnter)
    // }
    return (
        <h1 className={PFP.test}>PostFormPage.js</h1>
        // <div className={PFP.post-form0-container}>
        //     <div className="navbar-height" />
        //     {signInWarning}
        //     <form onSubmit={(e) => handleSubmit(e)}>
        //         <div className={PFP.post-form0-form}>
        //             <h1 className="pp-form-title" style={{textAlign: 'start', marginLeft: 0}}>create post</h1>
        //             <InputHeader info={false} title="title" color="white" inputFor="PF-title" />
        //             <input className={PFP.PF-search-input} id="PF-title" {...title.fields} />
        //             <InputHeader info={true} title="description" color="white" inputFor="PF-description" >
        //                 <ul style={{margin: 0}}>
        //                     <li>any links starting with (https://) or (http://) get decorated like this <a href="https://www.unilous.com/post-form/" className="p-link neutralize-link">http://decorated-link.com</a></li>
        //                 </ul>
        //             </InputHeader>
        //             <textarea className={PFP.PF-search-input} id="PF-description" {...description.fields}  style={{height: '100px', width: '100%'}} />
        //             <InputHeader info={true} title="color" color="white" inputFor="">
        //                 <ul style={{margin: 0}}>
        //                     <li>used sparingly to decorate the post</li>
        //                 </ul>
        //             </InputHeader>
        //             <div className={PFP.PF-display-color} style={{backgroundColor: pallette.color}} >
        //                 <div className={PFP.PF-display-part} style={{backgroundColor: pallette.color, color: pallette.textColor}}><h4 style={{margin: 'auto'}}>primary</h4></div>
        //                 <div className={PFP.PF-display-part} style={{backgroundColor: pallette.higherColor, color: pallette.textColor}}><h4 style={{margin: 'auto'}}>secondary</h4></div>
        //             </div>
        //             <div className={PFP.PF-input-colors}>
        //                 {colorsHTML}
        //             </div>
        //             <InputHeader info={true} title="skills" color="white" inputFor="PF-skillName">
        //                 <p style={{margin: 0, marginBottom: '5px'}}>skills needed to execute the project</p>
        //                 <p style={{margin: 0, marginBottom: '5px'}}>amount of people needed per skill</p>
        //             </InputHeader>
        //             <div>
        //                 <div className={PFP.PF-skill-fields}>
        //                     <input className={PFP.PF-search-input} placeholder="skill name" id="PF-skillName" value={skillName} onChange={(e) => setSkillName(e.target.value)} type="text" style={{marginBottom: 0}} />
        //                     <input className={PFP.PF-search-input} placeholder="amount of help" value={skillCapacity} onChange={(e) => setSkillCapacity(e.target.value)} type="number" style={{marginBottom: 0}} />
        //                     <div className={PFP.PF-skill-sugg-container}>
        //                         <SkillSugg query={skillName} onSuggestionClicked={onSuggestionClicked} style={{gridColumn: '1/2'}} />
        //                     </div>
        //                 </div>
        //                 <h4 onClick={() => addSkills()} className={PFP.PF-field-submit standard-hover">add skill</h4>               
        //             </div>
        //             {skillsHTML().map(s => s)}
        //             <InputHeader info={true} title="contribution" color="white" inputFor="">
        //                 <p style={{margin: 0, marginBottom: '5px'}}>skill you contribute to the project</p>
        //             </InputHeader>
        //             {skillContribution()}
        //             <InputHeader info={true} title="group/contact link" color="white" inputFor="PF-GC-Link">
        //                 <p style={{margin: 0, marginBottom: '5px'}}>link shown to users who have been accepted to join the project</p>
        //                 <ul style={{margin: 0}}>
        //                     <li>group links recommended: <strong>Slack</strong>, <strong>Trello</strong>, <strong>Discord</strong>, or <strong>WhatsApp</strong></li>
        //                 </ul>
        //             </InputHeader>
        //             <div className={PFP.GCL-input}>
        //                 {groupCommType()}
        //             </div>
        //             <InputHeader info={false} title="images" color="white" inputFor="PF-imageLinks" />
        //             <input className={PFP.PF-search-input} type="url" placeholder="image link" id="PF-imageLinks" value={imageLink} onChange={(e) => setImageLink(e.target.value)} style={{marginBottom: 0}} />
        //             <h4 onClick={() => addImage()} className={PFP.PF-field-submit standard-hover}>add image</h4>
        //             <div className={PFP.PF-images-container}>
        //                 {imagesHTML()}
        //             </div>
        //             <InputHeader info={false} title="links" color="white" inputFor="PF-referenceLinks" />
        //             <input className={PFP.PF-search-input} type="url" id="PF-referenceLinks" value={referenceLink} onChange={(e) => setReferenceLink(e.target.value)} style={{marginBottom: 0}} />
        //             <h4 onClick={() => addRL()} className={PFP.PF-field-submit standard-hover}>add link</h4>
        //             {referenceLinksHTML()}
        //         </div>
        //         <button type="submit" className={PFP.PF-submit standard-hover}><h2 style={{margin: '5px'}}>create post</h2></button>
        //     </form>
        // </div>
    )
}

// PostFormPage = withRouter(PostFormPage)

// const mapStateToProps = (state) => {
// 	return {
//         skillProposition: state.skillProposition,
//         currentUser: state.currentUser,
//         token: state.token
// 	}
// }
// export default connect(
//     mapStateToProps,
//     { setAlert, resetAlert }
// )(PostFormPage)

export default PostFormPage;

// uses standard-hover from userUtilities
// what is pp-form-title?