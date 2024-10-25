
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees}) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete this'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side shadow-xl bg-slate-700 h-72">
            <figure className="w-1/3">
                <img
                    src={photo}
                    alt="coffee photo"
                    className="w-1/2" /></figure>
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
                       
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                        </Link>
                        
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;