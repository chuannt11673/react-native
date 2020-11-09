import { of } from "rxjs";

export const getMessages = (userId) => {
    return of([
        {
            id: '1',
            avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Phương Ly',
            message: '8h tối em mới về, hẹn a 9h nha',
            time: new Date()
        },
        {
            id: '2',
            avatar: 'https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Phương Thùy',
            message: '8h tối em mới về, hẹn a 9h nha',
            time: new Date()
        }
    ]);
}