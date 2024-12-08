import React from 'react';

function Page() {

    async function action(formData:FormData) {
        "use server";
        const selectedOptions = formData.getAll("options"); // 선택된 체크박스 값들
        console.log(selectedOptions); // 배열로 출력됨

    }
    return (<>
            <form action={action}>
                <label>
                    <input type="checkbox" name="options" value="Option 1"/> Option 1
                </label>
                <label>
                    <input type="checkbox" name="options" value="Option 2"/> Option 2
                </label>
                <label>
                    <input type="checkbox" name="options" value="Option 3"/> Option 3
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Page;
