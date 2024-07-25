const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="border border-solidpx-4  bg-gray-50 m-4 p-2 rounded-lg" placeholder="name" />
                <input type="text" className="border border-solidpx-4  bg-gray-50 m-4 p-2 rounded-lg" placeholder="message" />
                <button className="p-2 m-4 bg-green-100 m-4 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;