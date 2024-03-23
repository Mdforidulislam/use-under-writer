import ClaimReport from "@/Components/Claim Report/ClaimReport";
import BreadCum from "@/Components/Shared/BreadCum";


const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 py-6">
            {/* brea cum show here  */}
            <BreadCum pageName={'Report a Claim'}/>
            {/* componet or section import here  */}
            <ClaimReport/>
            
        </div>
    );
};

export default page;