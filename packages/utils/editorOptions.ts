import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';

const editorOptions = {
    holder: 'editorjs', // ID of the container

    inlineToolbar: ['link', 'bold', 'italic'],

    tools: {
        header: {
            class: Header,
            inlineToolbar: true,
            placeholder: 'Enter a heading...',
            config: {
                levels: [1, 2, 3],  // Allow H1, H2, H3
                defaultLevel: 1,     // Default heading level when inserting
            },
        },
        list: {
            class: List,
            inlineToolbar: true,
            placeholder: 'Enter list items...', // Tooltip for the List block
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            placeholder: 'Enter a quote...', // Tooltip for the Quote block
        },
        // image: {
        //     class: ImageTool,
        //     config: {
        //         uploader: {
        //             uploadByFile(file: File) {
        //                 return new Promise((resolve, reject) => {
        //                     const reader = new FileReader();
        //                     reader.onload = () => {
        //                         resolve({
        //                             success: 1,
        //                             file: { url: reader.result as string },
        //                         });
        //                     };
        //                     reader.onerror = reject;
        //                     reader.readAsDataURL(file);
        //                 });
        //             },
        //         },
        //     },
        //     placeholder: 'Upload an image...', // Tooltip for the Image block
        // },
        code: {
            class: CodeTool,
            inlineToolbar: true,
            placeholder: 'Write your code...', // Tooltip for the Code block
        },
    },
}

export default editorOptions;