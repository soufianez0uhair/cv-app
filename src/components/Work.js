export default function Work(props) {
    return (
        <div className="section">
            <h2 className="heading">Work Experience</h2>
            {props.preview ? '' : <div className="inputs">
                <input type="text" onChange={(e) => props.handleChange(e)} placeholder="Title of the occupation" name="job" value={props.job} />
                <input type="text" onChange={(e) => props.handleChange(e)} placeholder="Employer" name="employer" value={props.employer} />
                <input type="text" onChange={(e) => props.handleChange(e)} placeholder="From" name="jobStartDate" value={props.jobStartDate}/>
                <input type="text" onChange={(e) => props.handleChange(e)} placeholder="To" name="jobEndDate" value={props.jobEndDate} />
                <textarea name="description" placeholder="Your responsibilities and main activities" value={props.description} onChange={(e) => props.handleChange(e)}></textarea>
            </div>}
            {props.preview && <div className="work">
                <p className="occupation">{props.job.toUpperCase()}</p>
                <p className="employer">{props.employer.toUpperCase()}</p>
                <p className="date">{props.jobStartDate} - {props.jobEndDate}</p>
                <p className="description">{props.description}</p>
            </div>}
        </div>
    )
}