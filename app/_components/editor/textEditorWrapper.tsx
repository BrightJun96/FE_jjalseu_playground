
import dynamic from "next/dynamic";
import {EditorProps} from "@toast-ui/react-editor";
import {TextEditorProps} from "@/app/_components/editor/textEditor";


const TextEditorNoSSR = dynamic(() => import("@/app/_components/editor/textEditor"), {
    ssr: false,
    loading: () => <p>텍스트 에디터 불러오는 중..</p>,
});

function TextEditorWrapper(props: EditorProps & TextEditorProps) {
    return (
       <TextEditorNoSSR
           {...props}
       />
    );
}

export default TextEditorWrapper;
