const GrayMarkIcon = (props: {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillOpacity={0.1}
      stroke="#fff"
      strokeWidth={2}
      d="M7.499 14.5 1 18.265V4.77c0-.842 0-1.415.036-1.857.035-.432.098-.653.175-.807a2 2 0 0 1 .895-.895c.154-.077.375-.14.807-.175C3.355 1.001 3.928 1 4.77 1h6.46c.842 0 1.415 0 1.857.036.432.035.653.098.807.175a2 2 0 0 1 .895.895c.077.154.14.375.175.807.035.442.036 1.015.036 1.857v13.495L8.501 14.5 8 14.21l-.501.29Z"
    />
  </svg>
);
export default GrayMarkIcon;
