import { mount } from '@vue/test-utils'
import App from '@/App'

const mockItems = [
        {id: 1, name: 'Laptop', quantity: 10, price: 100, bought: false},
        {id: 2, name: 'Phone', quantity: 3, price: 200, bought: false},
];

describe('App.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(App);
        wrapper.setData({ items: mockItems });

    });
    it('should render 2 items', () => {
        expect(wrapper.findAll('.item')).toHaveLength(2)
    })

    it('should render 2 toBuy, 1 bought items', () => {
        wrapper.setData({items: [
            ...mockItems,
                { id: 3, name: 'Phone 2', quantity: 3, price: 200, bought: true},
            ]
        });

        expect(wrapper.vm.toBuy).toHaveLength(2);
        expect(wrapper.vm.bought).toHaveLength(1);
    })

    it('should add 1 item', () => {
        wrapper.vm.submit({id: 100, name: 'New item', quantity: 10, price: 200})
        expect(wrapper.vm.toBuy).toHaveLength(3);
    })

    it('should delete 1 item', () => {
        wrapper.vm.deleteItem( mockItems[0]);
        expect(wrapper.vm.toBuy).toHaveLength(2);
    })

    it('should buy 1 item', () => {
        wrapper.vm.buy( mockItems[1]);
        expect(wrapper.vm.toBuy).toHaveLength(1);
        expect(wrapper.vm.bought).toHaveLength(1);
    })

    it('should be empty toBuy list', () => {
        wrapper.vm.buy( mockItems[0]);
        wrapper.vm.buy( mockItems[1]);
        expect(wrapper.vm.toBuy).toHaveLength(0);
    })

    it('should toggle modal', () => {
        wrapper.vm.showModal();
        expect(wrapper.vm.isModalVisible).toBe(true);
        wrapper.vm.closeModal();
        expect(wrapper.vm.isModalVisible).toBe(false);
    })
})
