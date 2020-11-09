import { of } from 'rxjs';

export const getComments = (id) => {
    return of([
        {
            id: '1',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Valadimir',
            message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
            comments: [
                {
                    avatar: 'https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    name: 'Thùy Ly',
                    message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất'
                }
            ]
        },
        {
            id: '2',
            avatar: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            name: 'Valerie',
            message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
            comments: [
                {
                    avatar: 'https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    name: 'Phương Ly',
                    message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
                },
                {
                    avatar: 'https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    name: 'Trang Đỗ',
                    message: 'Điều duy nhất hai người hợp nhau đó là cả hai cùng im lặng và... biến mất',
                }
            ]
        }
    ])
}