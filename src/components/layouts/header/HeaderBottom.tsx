import Container from "../Container";

export default function HeaderBottom() {
  return (
    <div className="py-3 bg-gray-100">
      <Container>
        <div className="">
          <ul className=" flex justify-around">
            <li>
              <a href="" className="flex items-center gap-4">
                <img className="w-8" src="https://pos.nvncdn.com/4ef0bf-108661/bn/20220217_DbZC1P3EtEQCzjezvBFKNdfn.PNG?v=1645067044" alt="" />
                <span>Hệ thống cửa hàng</span>
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-4">
                <img className="w-8" src="https://pos.nvncdn.com/4ef0bf-108661/bn/20220217_zI3LVzaVQ2ecO28wILTulXo0.PNG?v=1645066944" alt="" />
                <span>Thông tin vận chuyển</span>
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-4">
                <img className="w-8" src="https://pos.nvncdn.com/4ef0bf-108661/bn/20220217_6vuovyS0B4AEqbNDogOFTiB2.PNG?v=1645065730" alt="" />
                <span>Chính sách tích điểm</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
