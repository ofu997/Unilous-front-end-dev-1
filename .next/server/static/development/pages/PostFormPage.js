module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/PostFormPage.js":
/*!*******************************!*\
  !*** ./pages/PostFormPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_postForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/postForm.module.css */ "./styles/pages/postForm.module.css");
/* harmony import */ var _styles_pages_postForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_postForm_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/oliver/Documents/projects/Unilous-front-end-dev-1/pages/PostFormPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



let PostFormPage = props => {
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
  return __jsx("h1", {
    className: _styles_pages_postForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.test,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, "PostFormPage.js release branch . Today is Wednesday.") // <div className={PFP.post-form0-container}>
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
  ;
}; // PostFormPage = withRouter(PostFormPage)
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


/* harmony default export */ __webpack_exports__["default"] = (PostFormPage); // uses standard-hover from userUtilities
// what is pp-form-title?

/***/ }),

/***/ "./styles/pages/postForm.module.css":
/*!******************************************!*\
  !*** ./styles/pages/postForm.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"post-form0-container": "postForm_post-form0-container__2r2fc",
	"post-form0-form": "postForm_post-form0-form__GRmBw",
	"PF-fields-container": "postForm_PF-fields-container__121t1",
	"PF-input-title": "postForm_PF-input-title__38WN_",
	"PF-input": "postForm_PF-input__1JK0g",
	"PF-search-input-normal": "postForm_PF-search-input-normal__UjUab",
	"PF-search-input": "postForm_PF-search-input__1s7MS",
	"PF-display-color": "postForm_PF-display-color__2SoLl",
	"PF-display-part": "postForm_PF-display-part__1jamr",
	"PF-input-colors": "postForm_PF-input-colors__zTeYp",
	"color-ins": "postForm_color-ins__33_n1",
	"PF-skill-fields": "postForm_PF-skill-fields__7Ovk5",
	"PF-field-submit": "postForm_PF-field-submit__1q_IP",
	"PF-skill-wrapper": "postForm_PF-skill-wrapper__ZyRGO",
	"PF-skill-container": "postForm_PF-skill-container__1EX1O",
	"PF-skill-name": "postForm_PF-skill-name__ZVXzB",
	"PF-skill-cap": "postForm_PF-skill-cap__2PiTY",
	"PF-skill-remove": "postForm_PF-skill-remove__2Tu8O",
	"PF-images-container": "postForm_PF-images-container__iNnxe",
	"PF-image-display-container": "postForm_PF-image-display-container__2_90x",
	"PF-image-display": "postForm_PF-image-display__3rk_v",
	"PF-link-container": "postForm_PF-link-container__GF5sn",
	"PF-reference-link": "postForm_PF-reference-link__3Atpz",
	"PF-submit": "postForm_PF-submit__2x79y",
	"GCL-input": "postForm_GCL-input__Bg2LM",
	"GCL-type": "postForm_GCL-type__1J9dk",
	"GCL-image": "postForm_GCL-image__2r68k",
	"skills-container": "postForm_skills-container__2lyhy",
	"skill-selected": "postForm_skill-selected__l4O6e",
	"skill-normal": "postForm_skill-normal__1xGwg",
	"test": "postForm_test__c2Tq0"
};


/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/PostFormPage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oliver/Documents/projects/Unilous-front-end-dev-1/pages/PostFormPage.js */"./pages/PostFormPage.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9zdEZvcm1QYWdlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9wYWdlcy9wb3N0Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiUG9zdEZvcm1QYWdlIiwicHJvcHMiLCJQRlAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLElBQUlBLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUNJO0FBQUksYUFBUyxFQUFFQyx3RUFBRyxDQUFDQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDREQURKLENBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJFSjtBQXVFSCxDQWpVRCxDLENBbVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWVILDJFQUFmLEUsQ0FFQTtBQUNBLHlCOzs7Ozs7Ozs7OztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLGtDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9Qb3N0Rm9ybVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBGUCBmcm9tICcuLi9zdHlsZXMvcGFnZXMvcG9zdEZvcm0ubW9kdWxlLmNzcyc7XG5cbmxldCBQb3N0Rm9ybVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICAvLyBjb25zdCB0aXRsZSA9IHVzZUZpZWxkKCd0ZXh0JylcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbiA9IHVzZUZpZWxkKCd0ZXh0JylcbiAgICAvLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgLy8gY29uc3QgZ3JvdXBDb250YWN0TGluayA9IHVzZUZpZWxkKCd1cmwnKVxuXG4gICAgLy8gY29uc3QgW3NraWxsTmFtZSwgc2V0U2tpbGxOYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIC8vIGNvbnN0IFtza2lsbE5hbWVMaXN0LCBzZXRTa2lsbE5hbWVMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICAgIC8vIGNvbnN0IFtza2lsbENhcGFjaXR5LCBzZXRTa2lsbENhcGFjaXR5XSA9IHVzZVN0YXRlKCcnKVxuICAgIC8vIGNvbnN0IFtza2lsbENhcExpc3QsIHNldFNraWxsQ2FwTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgICAvLyBjb25zdCBbaW1hZ2VMaW5rLCBzZXRJbWFnZUxpbmtdID0gdXNlU3RhdGUoJycpXG4gICAgLy8gY29uc3QgW2ltYWdlTGlua0xpc3QsIHNldEltYWdlTGlua0xpc3RdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc3QgW3JlZmVyZW5jZUxpbmssIHNldFJlZmVyZW5jZUxpbmtdID0gdXNlU3RhdGUoJycpXG4gICAgLy8gY29uc3QgW3JlZmVyZW5jZUxpbmtMaXN0LCBzZXRSZWZlcmVuY2VMaW5rTGlzdF0gPSB1c2VTdGF0ZShbXSlcblxuICAgIC8vIGNvbnN0IFtza2lsbFByb3Bvc2l0aW9uLCBzZXRTa2lsbFByb3Bvc2l0aW9uXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgLy8gY29uc3QgW3NraWxsU2VsZWN0ZWQsIHNldFNraWxsU2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbClcbiAgICAvLyAvLyBUaGlzIGlzIGEgdGVzdCBmb3IgZm9ybSB2YWxpZGF0aW9uXG4gICAgLy8gY29uc3QgaGFuZGxlRXJyb3IgPSAoZSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gZS5tZXNzYWdlXG4gICAgLy8gICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdSZXNwb25zZSBub3Qgc3VjY2Vzc2Z1bCcpKSB7XG4gICAgLy8gICAgICAgICB0cmlnZ2VyQWxlcnQoJ3dhcm5pbmcnLCAnYWxsJDogdGl0bGUsIGRlc2NyaXB0aW9uLCBjb2xvciwgZ3JvdXAvY29udGFjdCBsaW5rLCBza2lsbHMsIGFuZCBjb250cmlidXRpb24gYXJlIGFsbCByZXF1aXJlZCcsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGwgXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ1BhdGggYHRpdGxlYCAoJykpIHtcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGB0aXRsZSQ6IHRpdGxlIG9mICR7dGl0bGUuZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBtdXN0IG9ubHkgaGF2ZSBhdCBtb3N0IDEwMCBjaGFyYWN0ZXJzYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXG4gICAgLy8gICAgICAgICByZXR1cm4gbnVsbFxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdkdXAga2V5OiB7IHRpdGxlJykpIHtcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGB0aXRsZSQ6ICR7dGl0bGUuZmllbGRzLnZhbHVlfSBpcyBub3QgdW5pcXVlLiBUaXRsZSBtdXN0IGJlIHVuaXF1ZWAsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnZHVwbGljYXRlIGRlc2NyaXB0aW9uJykpIHtcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBkZXNjcmlwdGlvbiQ6IGRlc2NyaXB0aW9uIGlzIG5vdCB1bmlxdWUuIERlc2NyaXB0aW9uIG11c3QgYmUgdW5pcXVlYCwgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXG4gICAgLy8gICAgICAgICByZXR1cm4gbnVsbFxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdtaW5pbXVtIGFsbG93ZWQgbGVuZ3RoJykpIHtcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBkZXNjcmlwdGlvbiQ6IGRlc2NyaXB0aW9uIG9mICR7ZGVzY3JpcHRpb24uZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBtdXN0IGF0IGxlYXN0IGhhdmUgMTAwIGNoYXJhY3RlcnNgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ1BhdGggYGRlc2NyaXB0aW9uYCAoJykpIHtcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBkZXNjcmlwdGlvbiQ6IGRlc2NyaXB0aW9uIG9mICR7ZGVzY3JpcHRpb24uZmllbGRzLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVycyBtdXN0IG9ubHkgaGF2ZSBhdCBtb3N0IDMwMDAgY2hhcmFjdGVyc2AsIHByb3BzLnNldEFsZXJ0LCBwcm9wcy5yZXNldEFsZXJ0KVxuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnZHVwbGljYXRlIGNvbnRhY3RMaW5rJykpIHtcbiAgICAvLyAgICAgICAgIHRyaWdnZXJBbGVydCgnd2FybmluZycsIGBncm91cC9jb250YWN0IGxpbmskOiAke2dyb3VwQ29udGFjdExpbmsuZmllbGRzLnZhbHVlfSBpcyBub3QgdW5pcXVlLiBHcm91cC9jb250YWN0IGxpbmsgbXVzdCBiZSB1bmlxdWVgLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gY29uc3QgW2NyZWF0ZVBvc3RdID0gdXNlTXV0YXRpb24oIENSRUFURV9QT1NULCB7XG4gICAgLy8gICAgIG9uRXJyb3I6IGhhbmRsZUVycm9yXG4gICAgLy8gfSlcbiAgICAvLyBjb25zdCBwYWxsZXR0ZSA9IGNvbG9yID8gcGFsbGV0dGVHZW5lcmF0b3IoY29sb3IpLmNvbG9yUGFsbGV0dGUgOiB7Y29sb3I6IG51bGwsIGhlaWdoZXJDb2xvcjogbnVsbH1cbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyAgICAgaWYgKCFwcm9wcy50b2tlbikge1xuICAgIC8vICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ3NpZ24gaW4kOiBtdXN0IGJlIHNpZ25lZCBpbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uJywgcHJvcHMuc2V0QWxlcnQsIHByb3BzLnJlc2V0QWxlcnQpXG4gICAgLy8gICAgICAgICByZXR1cm4gbnVsbFxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICghc2tpbGxOYW1lTGlzdC5sZW5ndGggfHwgIWdyb3VwQ29udGFjdExpbmsuZmllbGRzLnZhbHVlLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgdHJpZ2dlckFsZXJ0KCd3YXJuaW5nJywgJ2FsbCQ6IHRpdGxlLCBkZXNjcmlwdGlvbiwgY29sb3IsIGdyb3VwL2NvbnRhY3QgbGluaywgc2tpbGxzLCBhbmQgY29udHJpYnV0aW9uIGFyZSBhbGwgcmVxdWlyZWQnLCBwcm9wcy5zZXRBbGVydCwgcHJvcHMucmVzZXRBbGVydClcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IGNsZWFuZWRUaXRsZSA9IFtdXG4gICAgLy8gICAgIGZvciAoY29uc3Qgd29yZCBvZiB0aXRsZS5maWVsZHMudmFsdWUuc3BsaXQoJyAnKSkge1xuICAgIC8vICAgICAgICAgaWYgKHdvcmQubGVuZ3RoKSBjbGVhbmVkVGl0bGUucHVzaCh3b3JkKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnN0IHBvc3RDcmVhdGVkID0gYXdhaXQgY3JlYXRlUG9zdCh7XG4gICAgLy8gICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogY2xlYW5lZFRpdGxlLmpvaW4oJyAnKSxcbiAgICAvLyAgICAgICAgICAgICB1c2VyOiBwcm9wcy5jdXJyZW50VXNlci5faWQsXG4gICAgLy8gICAgICAgICAgICAgc2tpbGxOYW1lczogc2tpbGxOYW1lTGlzdCxcbiAgICAvLyAgICAgICAgICAgICBza2lsbENhcGFjaXRpZXM6IHNraWxsQ2FwTGlzdCxcbiAgICAvLyAgICAgICAgICAgICBza2lsbEZpbGxzOiBza2lsbFByb3Bvc2l0aW9uLFxuICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi5maWVsZHMudmFsdWUsXG4gICAgLy8gICAgICAgICAgICAgY29udGFjdExpbms6IGdyb3VwQ29udGFjdExpbmsuZmllbGRzLnZhbHVlLFxuICAgIC8vICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAvLyAgICAgICAgICAgICBpbWFnZUxpbmtzOiBpbWFnZUxpbmtMaXN0LFxuICAgIC8vICAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiByZWZlcmVuY2VMaW5rTGlzdFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICBpZiAocG9zdENyZWF0ZWQpIHtcbiAgICAvLyAgICAgICAgIHRpdGxlLnJlc2V0KClcbiAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uLnJlc2V0KClcbiAgICAvLyAgICAgICAgIGdyb3VwQ29udGFjdExpbmsucmVzZXQoKVxuICAgIC8vICAgICAgICAgc2V0U2tpbGxOYW1lKCcnKVxuICAgIC8vICAgICAgICAgc2V0U2tpbGxOYW1lTGlzdChbXSlcbiAgICAvLyAgICAgICAgIHNldFNraWxsQ2FwYWNpdHkoJycpXG4gICAgLy8gICAgICAgICBzZXRTa2lsbENhcExpc3QoW10pXG4gICAgLy8gICAgICAgICBzZXRJbWFnZUxpbmsoJycpXG4gICAgLy8gICAgICAgICBzZXRJbWFnZUxpbmtMaXN0KFtdKVxuICAgIC8vICAgICAgICAgc2V0UmVmZXJlbmNlTGluaygnJylcbiAgICAvLyAgICAgICAgIHNldFJlZmVyZW5jZUxpbmtMaXN0KFtdKVxuICAgIC8vICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKGAvcG9zdC8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0Q3JlYXRlZC5kYXRhLmFkZFBvc3QudGl0bGUpfWApXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gY29uc3QgY29sb3JzID0gW1xuICAgIC8vICAgICAncmdiKDE5OSwwLDU3KScsICdyZ2IoMjI0LDUyLDc3KScsICdyZ2IoMjQ1LDE2NSwwKScsICdyZ2IoMjUwLDExNiw3OSknLCAncmdiKDI0NiwxNzIsMjAwKScsXG4gICAgLy8gICAgICdyZ2IoMTYsNzksMzcpJywgJ3JnYigxNSwxMzgsOTUpJywgJ3JnYigxNDAsMTg2LDgxKScsICdyZ2IoMTUyLDE4Myw0OSknLCAncmdiKDEyNywyMDUsMTQ1KScsIFxuICAgIC8vICAgICAncmdiKDIsNjYsNzMpJywgJ3JnYigxNSw3NiwxMTcpJywgJ3JnYig1MCw2MiwyMjEpJywgJ3JnYigxLDE1MiwxNzMpJywgJ3JnYigxMTMsMTEyLDI1NSknLCAgXG4gICAgLy8gICAgICdyZ2IoMjAsMjAsMjApJywgJ3JnYig2MCw2MCw2MCknLCAncmdiKDEzMywxNTYsMTc3KSdcbiAgICAvLyBdXG4gICAgLy8gY29uc3QgY29sb3JzSFRNTCA9IGNvbG9ycy5tYXAoYyA9PiA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldENvbG9yKGMpfSBjbGFzc05hbWU9e1BGUC5jb2xvci1pbnN9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjfX0ga2V5PXtgUEZDJHtjfWB9IC8+KVxuICAgIC8vIGNvbnN0IGFkZFNraWxscyA9ICgpID0+IHtcbiAgICAvLyAgICAgbGV0IGNsZWFuZWRTa2lsbCA9IFtdXG4gICAgLy8gICAgIGZvciAoY29uc3Qgd29yZCBvZiBza2lsbE5hbWUuc3BsaXQoJyAnKSkge1xuICAgIC8vICAgICAgICAgaWYgKHdvcmQubGVuZ3RoKSBjbGVhbmVkU2tpbGwucHVzaCh3b3JkKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldFNraWxsTmFtZShjbGVhbmVkU2tpbGwuam9pbignICcpKVxuICAgIC8vICAgICBpZiAoTnVtYmVyKHNraWxsQ2FwYWNpdHkpKXtcbiAgICAvLyAgICAgICAgIHNldFNraWxsTmFtZUxpc3Qoc2tpbGxOYW1lTGlzdC5jb25jYXQoc2tpbGxOYW1lLnRvTG93ZXJDYXNlKCkpKVxuICAgIC8vICAgICAgICAgc2V0U2tpbGxOYW1lKCcnKVxuICAgIC8vICAgICAgICAgc2V0U2tpbGxDYXBMaXN0KHNraWxsQ2FwTGlzdC5jb25jYXQoTnVtYmVyKHNraWxsQ2FwYWNpdHkpKSlcbiAgICAvLyAgICAgICAgIHNldFNraWxsQ2FwYWNpdHkoJycpXG4gICAgLy8gICAgICAgICBzZXRTa2lsbFByb3Bvc2l0aW9uKG51bGwpXG4gICAgLy8gICAgICAgICBzZXRTa2lsbFNlbGVjdGVkKG51bGwpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gY29uc3QgcmVtb3ZlU2tpbGwgPSAoaW5kKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IG5ld1NraWxsTmFtZUxpc3QgPSBbXVxuICAgIC8vICAgICBmb3IgKGNvbnN0IGkgaW4gc2tpbGxOYW1lTGlzdCkge1xuICAgIC8vICAgICAgICAgaWYgKGkgIT09IGluZCkgeyBuZXdTa2lsbE5hbWVMaXN0LnB1c2goc2tpbGxOYW1lTGlzdFtpXSkgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldFNraWxsTmFtZUxpc3QobmV3U2tpbGxOYW1lTGlzdClcbiAgICAvLyAgICAgY29uc3QgbmV3U2tpbGxDYXBMaXN0ID0gW11cbiAgICAvLyAgICAgZm9yIChjb25zdCBpIGluIHNraWxsQ2FwTGlzdCkge1xuICAgIC8vICAgICAgICAgaWYgKGkgIT09IGluZCkgeyBuZXdTa2lsbENhcExpc3QucHVzaChza2lsbENhcExpc3RbaV0pIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXRTa2lsbENhcExpc3QobmV3U2tpbGxDYXBMaXN0KVxuICAgIC8vICAgICBjb25zdCBuZXdTa2lsbFByb3Bvc2l0aW9uID0gW11cbiAgICAvLyAgICAgZm9yIChjb25zdCBpIGluIHByb3BzLnNraWxsUHJvcG9zaXRpb24pIHtcbiAgICAvLyAgICAgICAgIGlmIChpICE9PSBpbmQpIHsgbmV3U2tpbGxQcm9wb3NpdGlvbi5wdXNoKHByb3BzLnNraWxsUHJvcG9zaXRpb25baV0pIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBcbiAgICAvLyBjb25zdCByZW1vdmVJbWFnZSA9IChpbmQpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbmV3SW1hZ2VMaW5rTGlzdCA9IFtdXG4gICAgLy8gICAgIGZvciAoY29uc3QgaSBpbiBpbWFnZUxpbmtMaXN0KSB7XG4gICAgLy8gICAgICAgICBpZiAoaSAhPT0gaW5kKSB7IG5ld0ltYWdlTGlua0xpc3QucHVzaChpbWFnZUxpbmtMaXN0W2ldKSB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2V0SW1hZ2VMaW5rTGlzdChuZXdJbWFnZUxpbmtMaXN0KVxuICAgIC8vIH1cbiAgICBcbiAgICAvLyBjb25zdCBhZGRJbWFnZSA9ICgpID0+IHtcbiAgICAvLyAgICAgaWYgKGltYWdlTGluay5pbmNsdWRlcygnaHR0cHM6Ly8nKSB8fCBpbWFnZUxpbmsuaW5jbHVkZXMoJ2h0dHA6Ly8nKSkge1xuICAgIC8vICAgICAgICAgc2V0SW1hZ2VMaW5rTGlzdChpbWFnZUxpbmtMaXN0LmNvbmNhdChpbWFnZUxpbmspKVxuICAgIC8vICAgICAgICAgc2V0SW1hZ2VMaW5rKCcnKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgcmVtb3ZlUkwgPSAoaW5kKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IG5ld1JlZmVyZW5jZUxpbmtMaXN0ID0gW11cbiAgICAvLyAgICAgZm9yIChjb25zdCBpIGluIHJlZmVyZW5jZUxpbmtMaXN0KSB7XG4gICAgLy8gICAgICAgICBpZiAoaSAhPT0gaW5kKSB7IG5ld1JlZmVyZW5jZUxpbmtMaXN0LnB1c2gocmVmZXJlbmNlTGlua0xpc3RbaV0pIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXRSZWZlcmVuY2VMaW5rTGlzdChuZXdSZWZlcmVuY2VMaW5rTGlzdClcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBhZGRSTCA9ICgpID0+IHtcbiAgICAvLyAgICAgaWYgKHJlZmVyZW5jZUxpbmsuaW5jbHVkZXMoJ2h0dHBzOi8vJykgfHwgcmVmZXJlbmNlTGluay5pbmNsdWRlcygnaHR0cDovLycpKSB7XG4gICAgLy8gICAgICAgICBzZXRSZWZlcmVuY2VMaW5rTGlzdChyZWZlcmVuY2VMaW5rTGlzdC5jb25jYXQocmVmZXJlbmNlTGluaykpXG4gICAgLy8gICAgICAgICBzZXRSZWZlcmVuY2VMaW5rKCcnKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3Qgc2tpbGxzSFRNTCA9ICgpID0+IHtcbiAgICAvLyAgICAgbGV0IHNraWxsc0hUTUwgPSBbXVxuICAgIC8vICAgICBmb3IgKGNvbnN0IGluZCBpbiBza2lsbE5hbWVMaXN0KSB7XG4gICAgLy8gICAgICAgICBza2lsbHNIVE1MLnB1c2goXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5QRi1za2lsbC13cmFwcGVyfSBrZXk9e2BQRlMke3NraWxsTmFtZUxpc3RbaW5kXX1gfT5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5QRi1za2lsbC1jb250YWluZXJ9PlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5QRi1za2lsbC1uYW1lfT57c2tpbGxOYW1lTGlzdFtpbmRdfTwvZGl2PlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5QRi1za2lsbC1jYXB9Pntza2lsbENhcExpc3RbaW5kXX08L2Rpdj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQRlAuUEYtc2tpbGwtcmVtb3ZlfSBvbkNsaWNrPXsoKSA9PiByZW1vdmVTa2lsbChpbmQpfT54PC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICApXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHNraWxsc0hUTUxcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBza2lsbENvbnRyaWJ1dGlvbiA9ICgpID0+IHtcbiAgICAvLyAgICAgaWYgKCFza2lsbE5hbWVMaXN0Lmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIDxoNCBjbGFzc05hbWU9e1BGUC5QRi1pbnB1dC10aXRsZX0gc3R5bGU9e3tvcGFjaXR5OiAwLjd9fT5tdXN0IGFkZCBza2lsbCBmaXJzdDwvaDQ+XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBjb25zdCBoYW5kbGVTa2lsbFNlbGVjdCA9IChpKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBza2lsbEFycmF5ID0gQXJyYXkoc2tpbGxOYW1lTGlzdC5sZW5ndGgpLmZpbGwoMClcbiAgICAvLyAgICAgICAgIHNraWxsQXJyYXlbaV0gPSAxXG4gICAgLy8gICAgICAgICBzZXRTa2lsbFByb3Bvc2l0aW9uKHNraWxsQXJyYXkpXG4gICAgLy8gICAgICAgICBzZXRTa2lsbFNlbGVjdGVkKHNraWxsTmFtZUxpc3RbaV0pXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBjb25zdCBza2lsbE1hcCA9IFtdXG4gICAgLy8gICAgIGZvciAoY29uc3QgaSBpbiBza2lsbE5hbWVMaXN0KSB7XG4gICAgLy8gICAgICAgICBjb25zdCBza2lsbENsYXNzID0gc2tpbGxTZWxlY3RlZCA9PT0gc2tpbGxOYW1lTGlzdFtpXSA/XG4gICAgLy8gICAgICAgICAgICAgJ1BGUC5za2lsbC1zZWxlY3RlZCcgOiAnUEZQLnNraWxsLW5vcm1hbCdcbiAgICAvLyAgICAgICAgIHNraWxsTWFwLnB1c2goXG4gICAgLy8gICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNraWxsU2VsZWN0KGksIHNraWxsTmFtZUxpc3RbaV0pfSBjbGFzc05hbWU9e3NraWxsQ2xhc3N9IGtleT17YFNLSUxMJHtpfWB9Pntza2lsbE5hbWVMaXN0W2ldfTwvaDQ+XG4gICAgLy8gICAgICAgICApXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5za2lsbHMtY29udGFpbmVyfT5cbiAgICAvLyAgICAgICAgICAgICB7c2tpbGxNYXB9XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGltYWdlc0hUTUwgPSAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGFsbEltYWdlcyA9IFtdXG4gICAgLy8gICAgIGZvciAoY29uc3QgaW5kIGluIGltYWdlTGlua0xpc3QpIHtcbiAgICAvLyAgICAgICAgIGFsbEltYWdlcy5wdXNoKFxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQRlAuUEYtaW1hZ2UtZGlzcGxheS1jb250YWluZXJ9IGtleT17YElMJHtpbmR9YH0+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtQRlAuUEYtaW1hZ2UtZGlzcGxheX0gc3JjPXtpbWFnZUxpbmtMaXN0W2luZF19IGFsdD17YCgke2ltYWdlTGlua0xpc3RbaW5kXX0pIGZhaWxlZCB0byBsb2FkYH0ga2V5PXtgSUwke2ltYWdlTGlua0xpc3RbaW5kXX1gfSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJlbW92ZUltYWdlKGluZCl9IGNsYXNzTmFtZT17UEZQLlBGLXNraWxsLXJlbW92ZX0gc3R5bGU9e3toZWlnaHQ6ICc3NXB4JywgbGluZUhlaWdodDogJzcwcHgnfX0gPng8L2Rpdj5cbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gYWxsSW1hZ2VzLm1hcChpbWcgPT4gaW1nKVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHJlZmVyZW5jZUxpbmtzSFRNTCA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgYWxsUkwgPSBbXVxuICAgIC8vICAgICBmb3IgKGNvbnN0IGluZCBpbiByZWZlcmVuY2VMaW5rTGlzdCkge1xuICAgIC8vICAgICAgICAgYWxsUkwucHVzaChcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UEZQLlBGLWxpbmstY29udGFpbmVyfSBrZXk9e2BSTCR7aW5kfWB9PlxuICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZWZlcmVuY2VMaW5rTGlzdFtpbmRdfSBjbGFzc05hbWU9e1BGUC5QRi1yZWZlcmVuY2UtbGluayBuZXV0cmFsaXplLWxpbmt9PntyZWZlcmVuY2VMaW5rTGlzdFtpbmRdLnNwbGl0KCcvJylbMl19PC9hPlxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJlbW92ZVJMKGluZCl9IGNsYXNzTmFtZT17UEZQLlBGLXNraWxsLXJlbW92ZX0gc3R5bGU9e3tsaW5lSGVpZ2h0OiAnMzBweCd9fT54PC9kaXY+XG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICApXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGFsbFJMLm1hcChybCA9PiBybClcbiAgICAvLyB9XG4gICAgLy8gY29uc3QgZ3JvdXBDb21tVHlwZSA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc3Qgc2l0ZVN0YXRzID0gd2Vic2l0ZVN0YXRzKGdyb3VwQ29udGFjdExpbmsuZmllbGRzLnZhbHVlKVxuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgIC8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17UEZQLkdDTC10eXBlfSBocmVmPXtncm91cENvbnRhY3RMaW5rLmZpZWxkcy52YWx1ZX0gdGl0bGU9e3NpdGVTdGF0cy50aXRsZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHNpdGVTdGF0cy5jb2xvcn19PjxpbWcgY2xhc3NOYW1lPVwiR0NMLWltYWdlXCIgc3JjPXtzaXRlU3RhdHMuaWNvbn0gYWx0PXtzaXRlU3RhdHMudGl0bGV9IC8+PC9hPlxuICAgIC8vICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1BGUC5QRi1zZWFyY2gtaW5wdXQtbm9ybWFsfSBpZD1cIlBGLUdDLUxpbmtcIiB7Li4uZ3JvdXBDb250YWN0TGluay5maWVsZHN9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwLCBib3JkZXJDb2xvcjogc2l0ZVN0YXRzLmNvbG9yfX0gLz5cbiAgICAvLyAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgLy8gICAgIClcbiAgICAvLyB9XG4gICAgLy8gY29uc3Qgc2lnbkluV2FybmluZyA9IHByb3BzLnRva2VuID8gbnVsbCA6IChcbiAgICAvLyAgICAgPGgzIGNsYXNzTmFtZT1cIndhcm5pbmctY29udGFpbmVyXCI+bXVzdCBiZSBzaWduZWQgaW4gdG8gYWRkIHBvc3Q8L2gzPlxuICAgIC8vIClcbiAgICAvLyBjb25zdCBvblN1Z2dlc3Rpb25DbGlja2VkID0gKHNraWxsKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHNraWxsVG9FbnRlciA9IGAke3NraWxsfSBgXG4gICAgLy8gICAgIHNldFNraWxsTmFtZShza2lsbFRvRW50ZXIpXG4gICAgLy8gfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e1BGUC50ZXN0fT5Qb3N0Rm9ybVBhZ2UuanMgcmVsZWFzZSBicmFuY2ggLiBUb2RheSBpcyBXZWRuZXNkYXkuPC9oMT5cbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9e1BGUC5wb3N0LWZvcm0wLWNvbnRhaW5lcn0+XG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWlnaHRcIiAvPlxuICAgICAgICAvLyAgICAge3NpZ25Jbldhcm5pbmd9XG4gICAgICAgIC8vICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0+XG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5wb3N0LWZvcm0wLWZvcm19PlxuICAgICAgICAvLyAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHAtZm9ybS10aXRsZVwiIHN0eWxlPXt7dGV4dEFsaWduOiAnc3RhcnQnLCBtYXJnaW5MZWZ0OiAwfX0+Y3JlYXRlIHBvc3Q8L2gxPlxuICAgICAgICAvLyAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5mbz17ZmFsc2V9IHRpdGxlPVwidGl0bGVcIiBjb2xvcj1cIndoaXRlXCIgaW5wdXRGb3I9XCJQRi10aXRsZVwiIC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1BGUC5QRi1zZWFyY2gtaW5wdXR9IGlkPVwiUEYtdGl0bGVcIiB7Li4udGl0bGUuZmllbGRzfSAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJkZXNjcmlwdGlvblwiIGNvbG9yPVwid2hpdGVcIiBpbnB1dEZvcj1cIlBGLWRlc2NyaXB0aW9uXCIgPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGxpPmFueSBsaW5rcyBzdGFydGluZyB3aXRoIChodHRwczovLykgb3IgKGh0dHA6Ly8pIGdldCBkZWNvcmF0ZWQgbGlrZSB0aGlzIDxhIGhyZWY9XCJodHRwczovL3d3dy51bmlsb3VzLmNvbS9wb3N0LWZvcm0vXCIgY2xhc3NOYW1lPVwicC1saW5rIG5ldXRyYWxpemUtbGlua1wiPmh0dHA6Ly9kZWNvcmF0ZWQtbGluay5jb208L2E+PC9saT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XG4gICAgICAgIC8vICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e1BGUC5QRi1zZWFyY2gtaW5wdXR9IGlkPVwiUEYtZGVzY3JpcHRpb25cIiB7Li4uZGVzY3JpcHRpb24uZmllbGRzfSAgc3R5bGU9e3toZWlnaHQ6ICcxMDBweCcsIHdpZHRoOiAnMTAwJSd9fSAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJjb2xvclwiIGNvbG9yPVwid2hpdGVcIiBpbnB1dEZvcj1cIlwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bWFyZ2luOiAwfX0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGxpPnVzZWQgc3BhcmluZ2x5IHRvIGRlY29yYXRlIHRoZSBwb3N0PC9saT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQRlAuUEYtZGlzcGxheS1jb2xvcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmNvbG9yfX0gPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5QRi1kaXNwbGF5LXBhcnR9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwYWxsZXR0ZS5jb2xvciwgY29sb3I6IHBhbGxldHRlLnRleHRDb2xvcn19PjxoNCBzdHlsZT17e21hcmdpbjogJ2F1dG8nfX0+cHJpbWFyeTwvaDQ+PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UEZQLlBGLWRpc3BsYXktcGFydH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBhbGxldHRlLmhpZ2hlckNvbG9yLCBjb2xvcjogcGFsbGV0dGUudGV4dENvbG9yfX0+PGg0IHN0eWxlPXt7bWFyZ2luOiAnYXV0byd9fT5zZWNvbmRhcnk8L2g0PjwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1BGUC5QRi1pbnB1dC1jb2xvcnN9PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAge2NvbG9yc0hUTUx9XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8SW5wdXRIZWFkZXIgaW5mbz17dHJ1ZX0gdGl0bGU9XCJza2lsbHNcIiBjb2xvcj1cIndoaXRlXCIgaW5wdXRGb3I9XCJQRi1za2lsbE5hbWVcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luOiAwLCBtYXJnaW5Cb3R0b206ICc1cHgnfX0+c2tpbGxzIG5lZWRlZCB0byBleGVjdXRlIHRoZSBwcm9qZWN0PC9wPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT5hbW91bnQgb2YgcGVvcGxlIG5lZWRlZCBwZXIgc2tpbGw8L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UEZQLlBGLXNraWxsLWZpZWxkc30+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17UEZQLlBGLXNlYXJjaC1pbnB1dH0gcGxhY2Vob2xkZXI9XCJza2lsbCBuYW1lXCIgaWQ9XCJQRi1za2lsbE5hbWVcIiB2YWx1ZT17c2tpbGxOYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFNraWxsTmFtZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fSAvPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1BGUC5QRi1zZWFyY2gtaW5wdXR9IHBsYWNlaG9sZGVyPVwiYW1vdW50IG9mIGhlbHBcIiB2YWx1ZT17c2tpbGxDYXBhY2l0eX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTa2lsbENhcGFjaXR5KGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cIm51bWJlclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0gLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UEZQLlBGLXNraWxsLXN1Z2ctY29udGFpbmVyfT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsU3VnZyBxdWVyeT17c2tpbGxOYW1lfSBvblN1Z2dlc3Rpb25DbGlja2VkPXtvblN1Z2dlc3Rpb25DbGlja2VkfSBzdHlsZT17e2dyaWRDb2x1bW46ICcxLzInfX0gLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9eygpID0+IGFkZFNraWxscygpfSBjbGFzc05hbWU9e1BGUC5QRi1maWVsZC1zdWJtaXQgc3RhbmRhcmQtaG92ZXJcIj5hZGQgc2tpbGw8L2g0PiAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAge3NraWxsc0hUTUwoKS5tYXAocyA9PiBzKX1cbiAgICAgICAgLy8gICAgICAgICAgICAgPElucHV0SGVhZGVyIGluZm89e3RydWV9IHRpdGxlPVwiY29udHJpYnV0aW9uXCIgY29sb3I9XCJ3aGl0ZVwiIGlucHV0Rm9yPVwiXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogMCwgbWFyZ2luQm90dG9tOiAnNXB4J319PnNraWxsIHlvdSBjb250cmlidXRlIHRvIHRoZSBwcm9qZWN0PC9wPlxuICAgICAgICAvLyAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxuICAgICAgICAvLyAgICAgICAgICAgICB7c2tpbGxDb250cmlidXRpb24oKX1cbiAgICAgICAgLy8gICAgICAgICAgICAgPElucHV0SGVhZGVyIGluZm89e3RydWV9IHRpdGxlPVwiZ3JvdXAvY29udGFjdCBsaW5rXCIgY29sb3I9XCJ3aGl0ZVwiIGlucHV0Rm9yPVwiUEYtR0MtTGlua1wiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW46IDAsIG1hcmdpbkJvdHRvbTogJzVweCd9fT5saW5rIHNob3duIHRvIHVzZXJzIHdobyBoYXZlIGJlZW4gYWNjZXB0ZWQgdG8gam9pbiB0aGUgcHJvamVjdDwvcD5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbjogMH19PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsaT5ncm91cCBsaW5rcyByZWNvbW1lbmRlZDogPHN0cm9uZz5TbGFjazwvc3Ryb25nPiwgPHN0cm9uZz5UcmVsbG88L3N0cm9uZz4sIDxzdHJvbmc+RGlzY29yZDwvc3Ryb25nPiwgb3IgPHN0cm9uZz5XaGF0c0FwcDwvc3Ryb25nPjwvbGk+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAvLyAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxuICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17UEZQLkdDTC1pbnB1dH0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB7Z3JvdXBDb21tVHlwZSgpfVxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPElucHV0SGVhZGVyIGluZm89e2ZhbHNlfSB0aXRsZT1cImltYWdlc1wiIGNvbG9yPVwid2hpdGVcIiBpbnB1dEZvcj1cIlBGLWltYWdlTGlua3NcIiAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtQRlAuUEYtc2VhcmNoLWlucHV0fSB0eXBlPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJpbWFnZSBsaW5rXCIgaWQ9XCJQRi1pbWFnZUxpbmtzXCIgdmFsdWU9e2ltYWdlTGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZUxpbmsoZS50YXJnZXQudmFsdWUpfSBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19IC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBhZGRJbWFnZSgpfSBjbGFzc05hbWU9e1BGUC5QRi1maWVsZC1zdWJtaXQgc3RhbmRhcmQtaG92ZXJ9PmFkZCBpbWFnZTwvaDQ+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtQRlAuUEYtaW1hZ2VzLWNvbnRhaW5lcn0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB7aW1hZ2VzSFRNTCgpfVxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPElucHV0SGVhZGVyIGluZm89e2ZhbHNlfSB0aXRsZT1cImxpbmtzXCIgY29sb3I9XCJ3aGl0ZVwiIGlucHV0Rm9yPVwiUEYtcmVmZXJlbmNlTGlua3NcIiAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtQRlAuUEYtc2VhcmNoLWlucHV0fSB0eXBlPVwidXJsXCIgaWQ9XCJQRi1yZWZlcmVuY2VMaW5rc1wiIHZhbHVlPXtyZWZlcmVuY2VMaW5rfSBvbkNoYW5nZT17KGUpID0+IHNldFJlZmVyZW5jZUxpbmsoZS50YXJnZXQudmFsdWUpfSBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19IC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiBhZGRSTCgpfSBjbGFzc05hbWU9e1BGUC5QRi1maWVsZC1zdWJtaXQgc3RhbmRhcmQtaG92ZXJ9PmFkZCBsaW5rPC9oND5cbiAgICAgICAgLy8gICAgICAgICAgICAge3JlZmVyZW5jZUxpbmtzSFRNTCgpfVxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17UEZQLlBGLXN1Ym1pdCBzdGFuZGFyZC1ob3Zlcn0+PGgyIHN0eWxlPXt7bWFyZ2luOiAnNXB4J319PmNyZWF0ZSBwb3N0PC9oMj48L2J1dHRvbj5cbiAgICAgICAgLy8gICAgIDwvZm9ybT5cbiAgICAgICAgLy8gPC9kaXY+XG4gICAgKVxufVxuXG4vLyBQb3N0Rm9ybVBhZ2UgPSB3aXRoUm91dGVyKFBvc3RGb3JtUGFnZSlcblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyBcdHJldHVybiB7XG4vLyAgICAgICAgIHNraWxsUHJvcG9zaXRpb246IHN0YXRlLnNraWxsUHJvcG9zaXRpb24sXG4vLyAgICAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5jdXJyZW50VXNlcixcbi8vICAgICAgICAgdG9rZW46IHN0YXRlLnRva2VuXG4vLyBcdH1cbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4vLyAgICAgbWFwU3RhdGVUb1Byb3BzLFxuLy8gICAgIHsgc2V0QWxlcnQsIHJlc2V0QWxlcnQgfVxuLy8gKShQb3N0Rm9ybVBhZ2UpXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtUGFnZTtcblxuLy8gdXNlcyBzdGFuZGFyZC1ob3ZlciBmcm9tIHVzZXJVdGlsaXRpZXNcbi8vIHdoYXQgaXMgcHAtZm9ybS10aXRsZT8iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0LWZvcm0wLWNvbnRhaW5lclwiOiBcInBvc3RGb3JtX3Bvc3QtZm9ybTAtY29udGFpbmVyX18ycjJmY1wiLFxuXHRcInBvc3QtZm9ybTAtZm9ybVwiOiBcInBvc3RGb3JtX3Bvc3QtZm9ybTAtZm9ybV9fR1JtQndcIixcblx0XCJQRi1maWVsZHMtY29udGFpbmVyXCI6IFwicG9zdEZvcm1fUEYtZmllbGRzLWNvbnRhaW5lcl9fMTIxdDFcIixcblx0XCJQRi1pbnB1dC10aXRsZVwiOiBcInBvc3RGb3JtX1BGLWlucHV0LXRpdGxlX18zOFdOX1wiLFxuXHRcIlBGLWlucHV0XCI6IFwicG9zdEZvcm1fUEYtaW5wdXRfXzFKSzBnXCIsXG5cdFwiUEYtc2VhcmNoLWlucHV0LW5vcm1hbFwiOiBcInBvc3RGb3JtX1BGLXNlYXJjaC1pbnB1dC1ub3JtYWxfX1VqVWFiXCIsXG5cdFwiUEYtc2VhcmNoLWlucHV0XCI6IFwicG9zdEZvcm1fUEYtc2VhcmNoLWlucHV0X18xczdNU1wiLFxuXHRcIlBGLWRpc3BsYXktY29sb3JcIjogXCJwb3N0Rm9ybV9QRi1kaXNwbGF5LWNvbG9yX18yU29MbFwiLFxuXHRcIlBGLWRpc3BsYXktcGFydFwiOiBcInBvc3RGb3JtX1BGLWRpc3BsYXktcGFydF9fMWphbXJcIixcblx0XCJQRi1pbnB1dC1jb2xvcnNcIjogXCJwb3N0Rm9ybV9QRi1pbnB1dC1jb2xvcnNfX3pUZVlwXCIsXG5cdFwiY29sb3ItaW5zXCI6IFwicG9zdEZvcm1fY29sb3ItaW5zX18zM19uMVwiLFxuXHRcIlBGLXNraWxsLWZpZWxkc1wiOiBcInBvc3RGb3JtX1BGLXNraWxsLWZpZWxkc19fN092azVcIixcblx0XCJQRi1maWVsZC1zdWJtaXRcIjogXCJwb3N0Rm9ybV9QRi1maWVsZC1zdWJtaXRfXzFxX0lQXCIsXG5cdFwiUEYtc2tpbGwtd3JhcHBlclwiOiBcInBvc3RGb3JtX1BGLXNraWxsLXdyYXBwZXJfX1p5UkdPXCIsXG5cdFwiUEYtc2tpbGwtY29udGFpbmVyXCI6IFwicG9zdEZvcm1fUEYtc2tpbGwtY29udGFpbmVyX18xRVgxT1wiLFxuXHRcIlBGLXNraWxsLW5hbWVcIjogXCJwb3N0Rm9ybV9QRi1za2lsbC1uYW1lX19aVlh6QlwiLFxuXHRcIlBGLXNraWxsLWNhcFwiOiBcInBvc3RGb3JtX1BGLXNraWxsLWNhcF9fMlBpVFlcIixcblx0XCJQRi1za2lsbC1yZW1vdmVcIjogXCJwb3N0Rm9ybV9QRi1za2lsbC1yZW1vdmVfXzJUdThPXCIsXG5cdFwiUEYtaW1hZ2VzLWNvbnRhaW5lclwiOiBcInBvc3RGb3JtX1BGLWltYWdlcy1jb250YWluZXJfX2lObnhlXCIsXG5cdFwiUEYtaW1hZ2UtZGlzcGxheS1jb250YWluZXJcIjogXCJwb3N0Rm9ybV9QRi1pbWFnZS1kaXNwbGF5LWNvbnRhaW5lcl9fMl85MHhcIixcblx0XCJQRi1pbWFnZS1kaXNwbGF5XCI6IFwicG9zdEZvcm1fUEYtaW1hZ2UtZGlzcGxheV9fM3JrX3ZcIixcblx0XCJQRi1saW5rLWNvbnRhaW5lclwiOiBcInBvc3RGb3JtX1BGLWxpbmstY29udGFpbmVyX19HRjVzblwiLFxuXHRcIlBGLXJlZmVyZW5jZS1saW5rXCI6IFwicG9zdEZvcm1fUEYtcmVmZXJlbmNlLWxpbmtfXzNBdHB6XCIsXG5cdFwiUEYtc3VibWl0XCI6IFwicG9zdEZvcm1fUEYtc3VibWl0X18yeDc5eVwiLFxuXHRcIkdDTC1pbnB1dFwiOiBcInBvc3RGb3JtX0dDTC1pbnB1dF9fQmcyTE1cIixcblx0XCJHQ0wtdHlwZVwiOiBcInBvc3RGb3JtX0dDTC10eXBlX18xSjlka1wiLFxuXHRcIkdDTC1pbWFnZVwiOiBcInBvc3RGb3JtX0dDTC1pbWFnZV9fMnI2OGtcIixcblx0XCJza2lsbHMtY29udGFpbmVyXCI6IFwicG9zdEZvcm1fc2tpbGxzLWNvbnRhaW5lcl9fMmx5aHlcIixcblx0XCJza2lsbC1zZWxlY3RlZFwiOiBcInBvc3RGb3JtX3NraWxsLXNlbGVjdGVkX19sNE82ZVwiLFxuXHRcInNraWxsLW5vcm1hbFwiOiBcInBvc3RGb3JtX3NraWxsLW5vcm1hbF9fMXhHd2dcIixcblx0XCJ0ZXN0XCI6IFwicG9zdEZvcm1fdGVzdF9fYzJUcTBcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=