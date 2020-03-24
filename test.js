// Import the mount() method from the test utils
// and the component you want to test
import { mount } from "@vue/test-utils";
import Counter from "./counter";

describe("Counter", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter);
  console.log(wrapper);
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  // it's also easy to check for the existence of elements
  it("has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  // it("button should increment the count", () => {
  //   expect(wrapper.vm.count).toBe(0);
  //   const button = wrapper.find("button");
  //   button.trigger("click");
  //   expect(wrapper.vm.count).toBe(1);
  // });

  it("button should emit the count", () => {
    // wrapper.vm.$emit("increment");
    // wrapper.vm.$emit("increment", 123);
    const button = wrapper.find("button");
    button.trigger("click");
    // 断言事件已经被触发
    expect(wrapper.emitted().increment).toBeTruthy();
    // 断言事件的数量
    expect(wrapper.emitted().increment.length).toBe(1);
    // 断言事件的有效数据
    expect(wrapper.emitted().increment[0]).toEqual([1]);
  });
});
