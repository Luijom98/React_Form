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
        <input type="radio" />
      </form>
      <hr />

      <h1>Entered Information</h1>
      <p>
        Your Name : {props.data.firtsName} {props.data.lastName}
      </p>
      <p> Your Age: {props.data.age}</p>
    </main>
  );
}

export default FormComponent;
