 const useResize = ()=> {

    const initResize = (selector) => {
    function handleResize(){

        let columns = document.querySelectorAll(selector)
        let colArr = Array.from(columns)
        for(let column of columns){
            column.style.height = "auto";
        }
    
        colArr = colArr.map(item => item.clientHeight)
        let maxHeight = Math.max(...colArr)
    
        
        for(let column of columns){
            console.log(column.style.height);
            column.style.height = `${maxHeight}px`;
            
        }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
}

return { initResize }


}

export default useResize;