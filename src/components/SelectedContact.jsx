import { useEffect, useState } from "react"

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {

    const [contactDetails, setContactDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchContactDetails = async () => {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const jsonResponse = await response.json();
                console.log("json Response",jsonResponse)
                setContactDetails(jsonResponse);
            } catch (error) {
                setError(error);
            }
        }
        fetchContactDetails();
    }, []);

    return (
        <div>
            {contactDetails ? (
                <div>
                    <h2>Contact Details for {contactDetails.name}</h2>
                    <h3>Company: {contactDetails.company.name}</h3>
                    <h3>Company Cathphrase: {contactDetails.company.catchPhrase}</h3>
                </div>
            ) : (<h2>loading...</h2>
    )}
            <button
                onClick={() => {
                    setSelectedContactId(null);
                }}
            >
                Back
            </button>
        </div>
    )
}
export default SelectedContact