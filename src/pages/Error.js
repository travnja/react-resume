import Header from "../components/layout/Header";

function ErrorPage() {

    const title = "This page does not exist!";
    const description = "Something went wrong";

    return (
        <>
            <Header />
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    );
}

export default ErrorPage;
