import {useState, useEffect} from 'react';
import {GetValue, UploadValue} from './firebase';


function Component() {

    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const getData = async () => {
            let result = await GetValue();
            setCurrentValue(result);
        }
        getData();
    }, [])

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        let result = await UploadValue(event.target.newValue.value);
        setCurrentValue(event.target.newValue.value);
    }

    return (
        <div>
            <h3>Luku tällä hetkellä: {currentValue}</h3>
            <form onSubmit={handleFormSubmission}>
                <input type='number' id='newValue' placeholder={0} />
                <button type='submit'>Päivitä</button>
            </form>
        </div>
    )
}

export default Component;