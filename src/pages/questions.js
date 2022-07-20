import { useNavigate } from "react-router-dom";


function Questions()  {

    let navigate = useNavigate();

    return (
    <div>
        
    <h1>Questions</h1>
    <form onSubmit={ () =>
    navigate("/finalpage") }>
    <ul>What super power would you have?</ul>
    <div className="radio">
          <label>
            <input
              type="radio"
              value="fly"
            />
            Fly
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Teleport"
            />
            Teleport
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Mind Reading"
            />
            Mind Reading
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="other"
            />
            Something else way more cool and obscure
          </label></div>

          
    <ul>What makes you believe in magic?</ul>
    <div className="radio">
          <label>
            <input
              type="radio"
              value="quietmornings"
            />
            Quiet Mornings
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="smiles"
            />
            Hearing someone you love geniuinely laugh
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="magician"
            />
            An actual magic trick
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="other"
            />
            I don't believe in silly stuff like that...
          </label></div>
    <ul>Best meal of the day?</ul>
    <div className="radio">
          <label>
            <input
              type="radio"
              value="Breakfast"
            />
            Breakfast
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Lunch"
            />
            Lunch
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Dinner"
            />
            Dinner
          </label></div>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="other"
            />
            Dessert
          </label></div>

          <button type="submit">
              Activate Lasers</button>
    </form>
    </div>

    )
}


export default Questions