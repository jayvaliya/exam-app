import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
// import Marker from '@editorjs/Marker';
import CodeTool from '@editorjs/code';
import { copyFileSync } from 'node:fs';

const editorOptions = {
    holder: 'editorjs', // ID of the container

    inlineToolbar: ['link', 'bold', 'italic', 'marker'],

    tools: {
        header: {
            class: Header,
            inlineToolbar: true,
            placeholder: 'Enter a heading...',
            config: {
                levels: [1, 2, 3],
                defaultLevel: 1,
            },
        },
        list: {
            class: List,
            inlineToolbar: true,
            placeholder: 'Enter list items...',
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            placeholder: 'Enter a quote...',
            defaultClasses: ['cdx-quote', 'cdx-quote__caption']
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
        //     placeholder: 'Upload an image...',
        // },

        code: {
            class: CodeTool,
            inlineToolbar: true,
            placeholder: 'Write your code...',
            defaultClasses: ['cdx-code'],
        },
    },
}

export default editorOptions;