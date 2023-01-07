

const Buttons = (props:any) => {

    const {disableNext, disablePrev} = props.states;
    const {prevButton, nextButton} = props.prev_next_buttons;
    const handleKeyPress = props.handleKeyPress;


    return (
        <div className="flex flex-row">

            {disablePrev ? <div className="flex flex-1 justify-start"><button type="button" className="btn bg-gray-300 text-gray-400 m-10" disabled>Previous</button></div> : <div className="flex flex-1 justify-start"><button type="button" className="btn bg-blue-600 text-white m-10 hover:bg-green-400" onClick={prevButton}>Previous</button></div>}
                
            {disableNext ? <div className="flex flex-1 justify-end"><button type="button" className="btn bg-gray-300 text-gray-400 m-10" disabled>Next</button></div> : <div className="flex flex-1 justify-end"><button type="button" className="btn bg-blue-600 text-white m-10 hover:bg-green-400" onClick={nextButton}>Next</button></div> }

        </div>
    )
    

}


export default Buttons;