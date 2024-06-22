import { Helmet } from "react-helmet-async";

const Blogs = () => {
    return (
        <div>
            <Helmet>
         <title>Ujan's Tour | Blogs</title>
       </Helmet>
        <div className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-12 mx-auto">
            <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"   style={{backgroundImage: 'url(https://i.ibb.co/0tWBkzc/2150497265.jpg)'}}>
                <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
                    <span className="text-amber-700">12 June</span>
                    <h1 className="py-4 text-violet-100 text-5xl font-bold">Thanks For Looking!</h1>
                    <p className="pb-6 text-amber-600">I'm David Leiter, the guy behind this website. </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                <div className="pt-6 pb-4 space-y-2">
                    <span className="">12 June</span>
                    <h1 className="text-3xl text-amber-700 font-bold">Travel with us </h1>
                    <p>I'm an American who's been traveling the world full time for 8 years now.

I started this travel blog in 2019 to document my own international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.

I'm currently based in Bali, Indonesia, where I met my wife Intan, who’s a Bali local. Now she joins me on these wild and crazy adventures too.</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div className="pt-6 pb-4 space-y-2">
                    <span>12 June</span>
                    <h1 className="text-3xl font-bold text-amber-700">OMG! Mountain travel</h1>
                    <p>This Oahu hike is epic, scary, and slightly illegal. Still interested? The ‘Stairway to Heaven‘ takes you to the top of the Ko’olau mountains via 3,922 metal stairs of pure adrenaline and doom. At some points, the stairway is almost vertical, clinging to the side of the steep mountain.</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div className="pt-6 pb-4  space-y-2">
                    <span>12 June</span>
                    <h1 className="text-3xl font-bold text-amber-700"> Crouching Lion Hike</h1>
                    <p>Crouching Lion is one of my favorite Oahu hikes. It’s a short but epic trail that ends with a panoramic view of the mountains and jungle at Kahana Bay, in northeast Oahu.</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Blogs;