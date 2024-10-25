import './App.css';

function Bikes() {
    return (<div>
        <button className="square">Bike</button>
        <button className="square">Bikes</button>
    </div>);
}

function Login(data_in, url) {
    const otherParam = {
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data_in),
        method: "POST",
    };
    fetch(url, otherParam).then(response => response.json()).then(json => console.log(json))
}

const showToken = (data,className = "") => {
     return Object.values(data.access).join("");
}

function Token(data, url) {


}

function UserBIO() {
    const url_login = "http://www.mybikerent.com/api/users/login";
    const url_token = "http://www.mybikerent.com/api/token/";

    const data = {
        username: "ivan",
        password: "qwerty"
    };
    Login(data, url_login);
    Token(data, url_token);

        return (<>
            <div>
                <button className="square">Img</button>
            </div>
            <div>
                <p id='login_status'></p>
            </div>
            <button className="square">Email</button>
        </>
    );
}
function UserHistory() {

    return (<>
                <button className="square">History_Rent</button>
        </>
    );
}
function BIO() {
    return (<div>
        <UserBIO/>
        <UserHistory/>
    </div>);
}

function App() {
    return (
        <>
            <div className="App-bikes">
                <Bikes/>
            </div>
        <div className="App-bio">
            <BIO />
        </div>
    </>

  );
}

export default App;
