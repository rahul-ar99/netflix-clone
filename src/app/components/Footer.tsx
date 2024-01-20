export default function Navbar(){
    return(
        <div className="w-full py-16 bg-neutral-950/[0.6] px-80">
            <h6 className="text-xl">Questions?Call<span>000-800-919-1694</span></h6>
            <div className="underline underline-offset-2 flex flex-wrap gap-2 text-[14px] my-4">
                <p className="w-[24%]">FAq</p>
                <p className="w-[24%]">Help Centre</p>
                <p className="w-[24%]">Account</p>
                <p className="w-[24%]">Media Centre</p>
                <p className="w-[24%]">Investor Relations</p>
                <p className="w-[24%]">Jobs</p>
                <p className="w-[24%]">Ways to Watch</p>
                <p className="w-[24%]">Terms of Use</p>
                <p className="w-[24%]">Privacy</p>
                <p className="w-[24%]">Cookie Preferences</p>
                <p className="w-[24%]">Corporate Information</p>
                <p className="w-[24%]">Contact Us</p>
                <p className="w-[24%]">Speed Test</p>
                <p className="w-[24%]">Legal Notices</p>
                <p className="w-[24%]">Only on Netflix</p>
            </div>
            <select className="bg-black border px-3 text-xl my-5" name="language" id="language">
                <option value="english">English</option>
                <option value="malayalam">Malayalam</option>
            </select>
            <h4>Netflix India</h4>
        </div>
    )
}