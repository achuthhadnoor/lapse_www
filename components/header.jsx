import { useState, useEffect } from 'react'

const Header = () => {
  const [timeStamp, setTimeStamp] = useState('')
  useEffect(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const date = new Date()
    const day = date.getDay()
    const today = date.getDate()
    const month = date.getMonth()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    setTimeStamp(
      `${days[day - 1]} ${today} ${months[month]} ${hours}:${minutes}`
    )

    setTimeout(() => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      const date = new Date()
      const day = date.getDay()
      const today = date.getDate()
      const month = date.getMonth()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      setTimeStamp(
        `${days[day !== 0 ? day - 1 : day]} ${today} ${
          months[month]
        } ${hours}:${minutes}`
      )
    }, 1000)
  }, [])
  return (
    <>
      <header className="sticky top-0 z-50 hidden items-center justify-between bg-black/30 p-2 backdrop-blur-md md:flex">
        <div className="flex items-center gap-2 align-middle">
          <span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4702_351)">
                <g filter="url(#filter0_d_4702_351)">
                  <path
                    d="M12.861 2.55483C13.3623 1.95654 13.71 1.13997 13.71 0.31531C13.71 0.20212 13.7019 0.08893 13.6776 0C12.8772 0.03234 11.907 0.5336 11.3249 1.21273C10.8722 1.73017 10.4517 2.55483 10.4517 3.37948C10.4517 3.50884 10.4679 3.63012 10.4841 3.67054C10.5326 3.67863 10.6134 3.6948 10.6943 3.6948C11.4219 3.6948 12.3274 3.2097 12.861 2.55483ZM13.4351 3.86458C12.2223 3.86458 11.2441 4.6003 10.6134 4.6003C9.9424 4.6003 9.06923 3.91309 8.01819 3.91309C6.02122 3.91309 4 5.56241 4 8.667C4 10.6074 4.74381 12.6529 5.67357 13.9707C6.46589 15.0864 7.16119 16 8.15563 16C9.15008 16 9.58666 15.3451 10.8075 15.3451C12.0606 15.3451 12.3355 15.9838 13.4351 15.9838C14.5184 15.9838 15.238 14.9894 15.9171 14.0111C16.6852 12.8873 17.0005 11.7959 17.0167 11.7393C16.952 11.7231 14.8742 10.8742 14.8742 8.5053C14.8742 6.45174 16.5073 5.53007 16.5963 5.4573C15.5291 3.91309 13.8878 3.86458 13.4351 3.86458Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_4702_351"
                  x="0"
                  y="-2"
                  width="21.0167"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4702_351"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4702_351"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_4702_351">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Lapse</span>
        </div>
        <div className="flex align-middle">
          <span>
            <svg
              width="176"
              height="25"
              viewBox="0 0 176 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4702_355)">
                <g filter="url(#filter0_d_4702_355)">
                  <path
                    d="M52.1562 19.9766H64.6328C65.2995 19.9766 65.9089 19.9219 66.4609 19.8125C67.013 19.7031 67.487 19.4505 67.8828 19.0547C68.2839 18.6536 68.5365 18.1797 68.6406 17.6328C68.7448 17.0859 68.7969 16.4766 68.7969 15.8047V13.1641C68.7969 12.4974 68.7448 11.8906 68.6406 11.3438C68.5365 10.7969 68.2839 10.3229 67.8828 9.92188C67.4818 9.52604 67.0052 9.27344 66.4531 9.16406C65.9062 9.05469 65.2995 9 64.6328 9H52.1406C51.4844 9 50.8802 9.05469 50.3281 9.16406C49.7812 9.27344 49.3073 9.52865 48.9062 9.92969C48.5104 10.3255 48.2578 10.7969 48.1484 11.3438C48.0443 11.8906 47.9922 12.4922 47.9922 13.1484V15.8047C47.9922 16.4766 48.0443 17.0859 48.1484 17.6328C48.2526 18.1797 48.5052 18.6536 48.9062 19.0547C49.3073 19.4505 49.7812 19.7031 50.3281 19.8125C50.8802 19.9219 51.4896 19.9766 52.1562 19.9766ZM51.9453 18.7188C51.5443 18.7188 51.1484 18.6797 50.7578 18.6016C50.3724 18.5234 50.0599 18.3672 49.8203 18.1328C49.5859 17.8984 49.4323 17.5885 49.3594 17.2031C49.2865 16.8177 49.25 16.4245 49.25 16.0234V12.9766C49.25 12.5651 49.2865 12.1667 49.3594 11.7812C49.4323 11.3906 49.5859 11.0755 49.8203 10.8359C50.0547 10.6016 50.3672 10.4479 50.7578 10.375C51.1536 10.2969 51.5573 10.2578 51.9687 10.2578H64.8438C65.2448 10.2578 65.638 10.2969 66.0234 10.375C66.4141 10.4479 66.7292 10.6042 66.9688 10.8438C67.2031 11.0781 67.3568 11.388 67.4297 11.7734C67.5026 12.1589 67.5391 12.5521 67.5391 12.9531V16.0234C67.5391 16.4245 67.5026 16.8177 67.4297 17.2031C67.3568 17.5885 67.2031 17.8984 66.9688 18.1328C66.7292 18.3724 66.4141 18.5312 66.0234 18.6094C65.638 18.6823 65.2448 18.7188 64.8438 18.7188H51.9453ZM69.8594 16.5078C70.0677 16.4922 70.2839 16.401 70.5078 16.2344C70.7318 16.0625 70.9219 15.8281 71.0781 15.5312C71.2344 15.2344 71.3125 14.8854 71.3125 14.4844C71.3125 14.0885 71.2344 13.7422 71.0781 13.4453C70.9219 13.1484 70.7318 12.9141 70.5078 12.7422C70.2839 12.5703 70.0677 12.4792 69.8594 12.4688V16.5078ZM51.6328 17.7266H65.1641C65.4349 17.7266 65.6536 17.7057 65.8203 17.6641C65.987 17.6224 66.1302 17.5443 66.25 17.4297C66.3646 17.3151 66.4427 17.1745 66.4844 17.0078C66.5312 16.8359 66.5547 16.6146 66.5547 16.3438V12.6328C66.5547 12.362 66.5312 12.1432 66.4844 11.9766C66.4427 11.8047 66.3646 11.6615 66.25 11.5469C66.1302 11.4271 65.987 11.349 65.8203 11.3125C65.6536 11.2708 65.4349 11.25 65.1641 11.25H51.6328C51.3568 11.25 51.1354 11.2708 50.9687 11.3125C50.8021 11.349 50.6615 11.4271 50.5469 11.5469C50.4323 11.6615 50.3516 11.8047 50.3047 11.9766C50.263 12.1432 50.2422 12.362 50.2422 12.6328V16.3438C50.2422 16.6146 50.263 16.8359 50.3047 17.0078C50.3516 17.1745 50.4323 17.3151 50.5469 17.4297C50.6667 17.5443 50.8073 17.6224 50.9687 17.6641C51.1354 17.7057 51.3568 17.7266 51.6328 17.7266Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter1_d_4702_355)">
                  <path
                    d="M90.3359 22.75H96.0078C96.6276 22.75 97.1901 22.6145 97.6953 22.3437C98.2005 22.0781 98.6016 21.7031 98.8984 21.2187C99.2005 20.7395 99.3516 20.1796 99.3516 19.539C99.3516 18.8984 99.2005 18.3385 98.8984 17.8593C98.6016 17.375 98.2005 17 97.6953 16.7343C97.1901 16.4635 96.6276 16.3281 96.0078 16.3281H90.3359C89.7161 16.3281 89.1536 16.4635 88.6484 16.7343C88.1432 17 87.7396 17.375 87.4375 17.8593C87.1406 18.3385 86.9922 18.8984 86.9922 19.539C86.9922 20.1796 87.1406 20.7395 87.4375 21.2187C87.7396 21.7031 88.1432 22.0781 88.6484 22.3437C89.1536 22.6145 89.7161 22.75 90.3359 22.75ZM96.2109 21.5703C95.8359 21.5651 95.4948 21.4713 95.1875 21.289C94.8802 21.1067 94.6354 20.8619 94.4531 20.5546C94.276 20.2474 94.1875 19.9062 94.1875 19.5312C94.1875 19.1614 94.276 18.8229 94.4531 18.5156C94.6354 18.2083 94.8802 17.9635 95.1875 17.7812C95.4948 17.5989 95.8359 17.5078 96.2109 17.5078C96.5859 17.5078 96.9271 17.5989 97.2344 17.7812C97.5469 17.9635 97.7943 18.2083 97.9766 18.5156C98.1589 18.8177 98.2474 19.1536 98.2422 19.5234C98.2422 19.8984 98.1484 20.2422 97.9609 20.5546C97.7786 20.8672 97.5339 21.1145 97.2266 21.2968C96.9245 21.4791 96.5859 21.5703 96.2109 21.5703ZM90.6562 15.125H95.6953C96.362 15.125 96.9714 14.9765 97.5234 14.6796C98.0807 14.3828 98.5234 13.9661 98.8516 13.4297C99.1849 12.8932 99.3516 12.2708 99.3516 11.5625C99.3516 10.8542 99.1849 10.2318 98.8516 9.69532C98.5234 9.15886 98.0807 8.74219 97.5234 8.44532C96.9714 8.14844 96.362 8 95.6953 8H90.6562C89.9844 8 89.3698 8.14844 88.8125 8.44532C88.2604 8.74219 87.8177 9.15886 87.4844 9.69532C87.1562 10.2318 86.9922 10.8542 86.9922 11.5625C86.9922 12.2708 87.1562 12.8932 87.4844 13.4297C87.8177 13.9661 88.2604 14.3828 88.8125 14.6796C89.3698 14.9765 89.9844 15.125 90.6562 15.125ZM90.6562 13.9453C90.2188 13.9453 89.8099 13.8464 89.4297 13.6484C89.0547 13.4453 88.75 13.1667 88.5156 12.8125C88.2865 12.4531 88.1719 12.0365 88.1719 11.5625C88.1719 11.0885 88.2865 10.6745 88.5156 10.3203C88.75 9.96094 89.0547 9.68229 89.4297 9.48438C89.8099 9.28125 90.2188 9.17969 90.6562 9.17969H95.6953C96.1276 9.17969 96.5312 9.28125 96.9062 9.48438C97.2865 9.68229 97.5911 9.96094 97.8203 10.3203C98.0547 10.6745 98.1719 11.0885 98.1719 11.5625C98.1719 12.0365 98.0547 12.4531 97.8203 12.8125C97.5911 13.1667 97.2865 13.4453 96.9062 13.6484C96.5312 13.8464 96.1276 13.9453 95.6953 13.9453H90.6562ZM90.6562 13.4141C91 13.4193 91.3099 13.3385 91.5859 13.1719C91.8672 13 92.0911 12.7734 92.2578 12.4922C92.4297 12.2057 92.5156 11.8906 92.5156 11.5469C92.5208 11.2031 92.4401 10.8932 92.2734 10.6172C92.1068 10.3359 91.8802 10.1146 91.5938 9.95313C91.3125 9.78646 91 9.70313 90.6562 9.70313C90.3125 9.70313 90 9.78646 89.7188 9.95313C89.4375 10.1198 89.2135 10.3438 89.0469 10.625C88.8854 10.9062 88.8047 11.2161 88.8047 11.5547C88.8047 11.8984 88.8854 12.2109 89.0469 12.4922C89.2135 12.7734 89.4375 12.9974 89.7188 13.1641C90 13.3307 90.3125 13.4141 90.6562 13.4141Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter2_d_4702_355)">
                  <path
                    d="M125.805 17.7187C126.45 17.7187 127.057 17.5963 127.625 17.3515C128.193 17.1068 128.693 16.7682 129.125 16.3359C129.557 15.8984 129.896 15.3958 130.141 14.8281C130.391 14.2604 130.516 13.6536 130.516 13.0078C130.516 12.362 130.391 11.7552 130.141 11.1875C129.896 10.6198 129.557 10.1198 129.125 9.6875C128.693 9.25521 128.193 8.91666 127.625 8.67187C127.057 8.42187 126.45 8.29687 125.805 8.29687C125.159 8.29687 124.552 8.42187 123.984 8.67187C123.417 8.91666 122.914 9.25521 122.477 9.6875C122.044 10.1198 121.706 10.6198 121.461 11.1875C121.216 11.7552 121.094 12.362 121.094 13.0078C121.094 13.6536 121.216 14.2604 121.461 14.8281C121.706 15.3958 122.044 15.8984 122.477 16.3359C122.914 16.7682 123.417 17.1068 123.984 17.3515C124.552 17.5963 125.159 17.7187 125.805 17.7187ZM125.805 19.0156C124.977 19.0156 124.2 18.8594 123.477 18.5469C122.753 18.2344 122.115 17.8021 121.562 17.25C121.01 16.6979 120.578 16.0599 120.266 15.3359C119.953 14.612 119.797 13.8359 119.797 13.0078C119.797 12.1797 119.953 11.4036 120.266 10.6797C120.578 9.95052 121.01 9.3125 121.562 8.76562C122.115 8.21354 122.753 7.78125 123.477 7.46875C124.206 7.15625 124.982 7 125.805 7C126.633 7 127.409 7.15625 128.133 7.46875C128.857 7.78125 129.495 8.21354 130.047 8.76562C130.599 9.31771 131.031 9.95573 131.344 10.6797C131.656 11.4036 131.812 12.1797 131.812 13.0078C131.812 13.8359 131.656 14.612 131.344 15.3359C131.031 16.0599 130.599 16.6979 130.047 17.25C129.495 17.8021 128.857 18.2344 128.133 18.5469C127.409 18.8594 126.633 19.0156 125.805 19.0156ZM133.641 21.8515C133.521 21.8515 133.406 21.8307 133.297 21.7891C133.187 21.7474 133.088 21.6823 133 21.5937L128.852 17.4453L130.133 16.2031L134.258 20.3359C134.346 20.4193 134.409 20.5156 134.445 20.625C134.487 20.7344 134.508 20.8463 134.508 20.9609C134.508 21.1276 134.469 21.276 134.391 21.4062C134.318 21.5417 134.216 21.6484 134.086 21.7265C133.956 21.8099 133.807 21.8515 133.641 21.8515Z"
                    fill="white"
                  />
                </g>
                <g filter="url(#filter3_d_4702_355)">
                  <path
                    d="M161.648 21.4922C161.732 21.4922 161.815 21.4661 161.898 21.4141C161.987 21.362 162.104 21.2656 162.25 21.125L164.078 19.3672C164.141 19.3099 164.174 19.2448 164.18 19.1719C164.19 19.0938 164.169 19.0208 164.117 18.9531C163.872 18.6354 163.531 18.3594 163.094 18.125C162.661 17.8906 162.18 17.7734 161.648 17.7734C161.107 17.7734 160.615 17.8958 160.172 18.1406C159.734 18.3854 159.393 18.6719 159.148 19C159.112 19.0573 159.099 19.1198 159.109 19.1875C159.125 19.25 159.164 19.3099 159.227 19.3672L161.055 21.125C161.195 21.2656 161.31 21.362 161.398 21.4141C161.487 21.4661 161.57 21.4922 161.648 21.4922ZM157.258 17.3906C157.336 17.4688 157.422 17.5052 157.516 17.5C157.609 17.4948 157.695 17.4505 157.773 17.3672C158.221 16.862 158.792 16.4479 159.484 16.125C160.177 15.8021 160.898 15.6432 161.648 15.6484C162.409 15.6432 163.135 15.8073 163.828 16.1406C164.521 16.4688 165.096 16.8854 165.555 17.3906C165.628 17.4688 165.708 17.5078 165.797 17.5078C165.885 17.5026 165.966 17.4609 166.039 17.3828L167.203 16.2344C167.266 16.1719 167.299 16.1042 167.305 16.0312C167.31 15.9531 167.286 15.8802 167.234 15.8125C166.854 15.349 166.378 14.9349 165.805 14.5703C165.232 14.2005 164.591 13.9115 163.883 13.7031C163.174 13.4896 162.43 13.3828 161.648 13.3828C160.867 13.3828 160.122 13.4896 159.414 13.7031C158.711 13.9115 158.073 14.2005 157.5 14.5703C156.927 14.9349 156.451 15.349 156.07 15.8125C156.013 15.8802 155.987 15.9505 155.992 16.0234C155.997 16.0964 156.031 16.1667 156.094 16.2344L157.258 17.3906ZM154.133 14.2578C154.206 14.3359 154.289 14.375 154.383 14.375C154.482 14.3698 154.565 14.3281 154.633 14.25C155.56 13.2708 156.62 12.5287 157.812 12.0234C159.005 11.513 160.284 11.2578 161.648 11.2578C163.018 11.2578 164.299 11.513 165.492 12.0234C166.69 12.5339 167.75 13.2786 168.672 14.2578C168.74 14.3255 168.82 14.3594 168.914 14.3594C169.008 14.3594 169.089 14.3203 169.156 14.2422L170.188 13.2031C170.255 13.1406 170.289 13.0703 170.289 12.9922C170.294 12.9089 170.271 12.8359 170.219 12.7734C169.63 12.0495 168.888 11.4036 167.992 10.8359C167.096 10.263 166.104 9.8151 165.016 9.49219C163.932 9.16406 162.81 9 161.648 9C160.487 9 159.362 9.16406 158.273 9.49219C157.185 9.8151 156.193 10.263 155.297 10.8359C154.406 11.4036 153.667 12.0495 153.078 12.7734C153.026 12.8359 153 12.9089 153 12.9922C153.005 13.0703 153.039 13.1406 153.102 13.2031L154.133 14.2578Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M12.8088 8H22C23.1046 8 24 8.89543 24 10V18.9088C24 20.2602 22.6876 21.2226 21.3987 20.8163L13.7751 18.4132C13.1061 18.2023 12.5964 17.6563 12.4321 16.9743L10.8644 10.4685C10.5613 9.21041 11.5146 8 12.8088 8Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_4702_355"
                  x="43.9922"
                  y="7"
                  width="31.3203"
                  height="18.9766"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4702_355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4702_355"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_4702_355"
                  x="82.9922"
                  y="6"
                  width="20.3594"
                  height="22.75"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4702_355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4702_355"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_4702_355"
                  x="115.797"
                  y="5"
                  width="22.7109"
                  height="22.8515"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4702_355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4702_355"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_4702_355"
                  x="149"
                  y="7"
                  width="25.2897"
                  height="20.4922"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4702_355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4702_355"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_4702_355">
                  <rect width="176" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="px-2 font-semibold">{timeStamp}</span>
        </div>
      </header>
    </>
  )
}
export default Header
