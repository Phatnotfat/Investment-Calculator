

export default function UserInput({onChangeInvestment, investment}){

    function handleChange(event){
        const {name, value} = event.target;
        onChangeInvestment(name, value);
    }

    return(
        <section id="user-input">
            <div className="input-group">
                <p className="input-item ">
                    <label >INITIAL INVESTMENT </label>
                    <input required type="number" value={investment.initialInvestment} name="initialInvestment" onChange={handleChange} />
                </p>
                <p className="input-item">
                    <label >ANNUAL INVESTMENT</label>
                    <input required type="number" value={investment.annualInvestment} name="annualInvestment" onChange={handleChange} />
                </p>
            </div>
            <div className="input-group">
                <p className="input-item">
                    <label >EXPECTED RETURN</label>
                    <input required type="number" value={investment.expectedReturn} name="expectedReturn" onChange={handleChange} />
                </p>
                <p className="input-item">
                    <label >DURATION</label>
                    <input required type="number" value={investment.duration} name="duration" onChange={handleChange} />
                </p>
            </div>
            
        </section>
    )
}