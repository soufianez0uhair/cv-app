export default function Education(props){
    return (
        <div className="section">
            <h2 className="heading">Education and Training</h2>
            {props.preview ? '' : <div className="inputs">
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.qualification} placeholder="Title of qualification awarded" style={{flexBasis: "94%"}} name="qualification"/>
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.school} placeholder="Organization providing education and training" name="school"/>
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.schStartDate} placeholder="From" name="schStartDate"/>
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.schEndDate} placeholder="To" name="schEndDate" />
            </div>}
            {props.preview && <div className="education">
                <p className="qualification">{props.qualification.toUpperCase()}</p>
                <p className="organization">{props.school.toUpperCase()}</p>
                <p className="date">{props.schStartDate} - {props.schEndDate}</p>
            </div>}
            
        </div>
    )
}