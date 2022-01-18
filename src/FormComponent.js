function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firtsName"
          value={props.data.firtsName}
          onChange={props.handleChange}
          placeholder="Firts name"
        />
        <br />
        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="put your age"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">---Please enter destination----</option>
          <option value="Spain">Spain</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Brazil">Brazil</option>
          <option value="Colombia">Colombia</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
        </label>
        Vegan?
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
        </label>
        Kosher?
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
        </label>
        Lactose Free?
      </form>
      <hr />

      <h1>Entered Information</h1>
      <p>
        Your Name : {props.data.firtsName} {props.data.lastName}
      </p>
      <p> Your Age: {props.data.age}</p>
      <p> Your Gender: {props.data.gender} </p>
      <p> Your Destination: {props.data.destination}</p>
      <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
      <p>Lactose free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
    </main>
  );
}

export default FormComponent;
