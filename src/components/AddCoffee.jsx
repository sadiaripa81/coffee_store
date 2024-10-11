const addCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee)
    }
    return (
        <div className="bg-slate-800 p-24 h-svh">
            <h1 className="text-6xl text-slate-200 text-center font-bold mb-7">Add a coffee</h1>

            <form onSubmit={handleAddCoffee} className="flex flex-col gap-6" >
                {/* form row  */}
                <div className="md:flex gap-4">
                    {/* name  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee name"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                    {/* quantity  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-4">
                    {/* supplier  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Coffee supplier"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                    {/* taste  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="taste"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-4">
                    {/* catagory  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="category"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                    {/* details  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="details"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                </div>
                {/* photo url  */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo URL"
                                className="input input-bordered w-full bg-slate-700" />
                        </label>
                    </div>
                </div>
                {/* button  */}
                <input type="submit" value="Add Coffee" className="mt-5 btn btn-block bg-slate-700 text-xl font-block" />
            </form>

        </div>
    );
};

export default addCoffee;