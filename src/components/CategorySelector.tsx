"use client";

const CategorySelector = ({
        categories,
        selectedCategories,
        setSelectedCategories
    }:{
        categories: string[],
        selectedCategories : string[];
        setSelectedCategories : React.Dispatch<React.SetStateAction<string[]>>
    }) => 
        
    {

        const addCategory = (category: string) => {
            if(!selectedCategories.includes(category)){
                setSelectedCategories(prev => ([...prev, category]));
            }
        };
        const removeCategory = (category: string) => {
            if(selectedCategories.includes(category)){
                const removedList = selectedCategories.filter((data) => data !== category);
                setSelectedCategories(removedList);
            }
        };

        const resetCategory = () =>{
            setSelectedCategories([]);
        }

        return(
            <div>
                <div className="flex items-center mt-4">
                    {categories.map(category => (
                        <div
                            key={category}
                            onClick={() => {
                                if (selectedCategories.includes(category)) {
                                    removeCategory(category);
                                } else {
                                    addCategory(category);
                                }
                            }}
                            className={`w-fit min-w-fit h-8 mx-2 px-5 py-2 flex flex-row justify-center items-center font-utendo text-md border border-gray-500 bg-white text-gray-900 break-keep rounded-3xl cursor-pointer 
                                        ${selectedCategories.includes(category) ? 'bg-purple-dark text-white-soft' : 'bg-white-soft text-gray-900'}`}>
                            {category}
                        </div>
                    ))}
                    <h1 className="cursor-pointer text-blue-500" onClick={() => resetCategory()}>Clear</h1>
                </div>
            </div>
        )
    };

export default CategorySelector;


