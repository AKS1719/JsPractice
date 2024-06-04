const insert = document.getElementById('insert')

window.addEventListener('keydown',(event)=>{
    insert.innerHTML = `
        <div class="color">
        <table border="3px" cellspacing="10px" cellpading="0px">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${event.key}</td>
                <td>${event.keyCode}</td>
                <td>${event.code}</td>
            </tr>
        </table>

        </div>
    `
})