function addTodo() {
    // lấy Id từ thẻ input
    const input = document.getElementById("todoInput");
    //lấy thuộc tính value của thẻ input
    const inputValue = input.value.trim();
    //nếu nhập khác khoảng trắng
    if (inputValue !== "") {
        //lấy ra id của thẻ div
        const todoList = document.getElementById("resualt");
        //tạo 1 thẻ div mới 
        const div = document.createElement("div");
        // tạo textNode có nội dung  chứa thuộc tính value của thẻ input
        const textNode = document.createTextNode(inputValue);
        //appendChild thêm textNode vào thẻ div
        div.appendChild(textNode);
        //tạo 1 nút xoá
        const deleteButton = document.createElement("button");
        div.appendChild(deleteButton);

        deleteButton.textContent = "Delete";
        //thêm event cho nút xoá
        deleteButton.onclick = function () {
            todoList.removeChild(div);
        };
        //thêm nội dung mới div vào cuối danh sách
        todoList.appendChild(div);

    }
}