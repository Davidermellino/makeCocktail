/* eslint-disable react/prop-types */
export default function Form({ getValue, ricerca, cocktail }) {
  return (
    <form className="text-center my-5" action="" onSubmit={ricerca}>
      <div className="row w-50 mx-auto">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            onChange={getValue}
            value={cocktail}
          />
        </div>
        <div className="col-4">
          <button className="btn btn-success">Cerca coctail</button>
        </div>
      </div>
    </form>
  );
}
