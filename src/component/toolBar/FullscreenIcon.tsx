import React, { useEffect, useState } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const FullScreenIcon = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? (
    <Tooltip
      title="Exit full screen"
      getPopupContainer={() =>
        ((document.getElementById('ant-design-pro-table') || document.body) as any) as HTMLElement
      }
    >
      <FullscreenExitOutlined />
    </Tooltip>
  ) : (
    <Tooltip
      title="Full screen"
      getPopupContainer={() =>
        ((document.getElementById('ant-design-pro-table') || document.body) as any) as HTMLElement
      }
    >
      <FullscreenOutlined />
    </Tooltip>
  );
};

export default FullScreenIcon;
