
const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="card card-side shadow-xl bg-slate-700 h-72">
            <figure className="w-1/3">
                <img
                    src={photo}
                    alt="coffee"
                    className="w-1/2" />
            </figure>
            <div className="flex justify-between my-auto w-2/3 ">

                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{details}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{taste}</p>
                </div>

                <div className="card-actions mr-6">
                    <div className="join join-vertical gap-y-4">
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;