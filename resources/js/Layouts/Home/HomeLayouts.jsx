import Sidebar from "@/Components/Home/Sidebar";

export default function Home({ children }) {
    return (
        <div>
            <Sidebar>
            </Sidebar>
            <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                {children}
            </div>
        </div>
    );
}