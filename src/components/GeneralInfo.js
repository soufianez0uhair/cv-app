export default function GaneralInfo(props) {
    return (
        <div className="section">
            <h2 className="heading">Personal Information</h2>
            {props.preview ? '' : <div className="inputs">
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.firstName} placeholder="First Name" name="firstName"/>
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.lastName} placeholder="Last Name" name="lastName"/>
                <input type="email" onChange={(e) => props.handleChange(e)} value={props.email} placeholder="Email" name="email"/>
                <input type="phone" onChange={(e) => props.handleChange(e)} value={props.phone} placeholder="Phone"name="phone"/>
            </div>}
            
            {props.preview && <div className="generalInfo">
                <h2 className="name">{props.firstName && props.firstName[0].toUpperCase() + props.firstName.slice(1).toLowerCase()} {props.lastName && props.lastName[0].toUpperCase() + props.lastName.slice(1).toLowerCase()}</h2>
                <p className="email">Email: {props.email}</p>
                <p className="phone">Phone: {props.phone}</p>
            </div>}
        </div>
    )
}