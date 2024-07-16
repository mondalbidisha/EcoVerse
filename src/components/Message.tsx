const Message = ({ notification }: any) => {
    const handleClick = () => {
      if (notification.click_action) {
        window.open(notification.click_action, '_self');
      }
    };

    return (
      <>
        <div className="flex items-center justify-center" onClick={handleClick}>
          <div>
            {notification.image && (
              <div className="max-h-[80%] max-w-[80%]">
                <img src={notification.image} />
              </div>
            )}
          </div>
          <div className="text-sm">{notification.body}</div>
        </div>
      </>
    );
  };
  
  export default Message;