import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

export default function BookingPage({availableTimes, dispatch, submitForm}) {
    return(
        <>
            <Header />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            <Footer />
        </>
    );
};