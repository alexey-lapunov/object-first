import { useEffect, useState } from 'react';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Tooltip } from '@mui/material';

import { Text, TextContainer } from './CopyableText.styles';

interface CopyableTextProps {
  text: string;
}

export const CopyableText: React.FC<CopyableTextProps> = ({ text }) => {
  const [copied, setCopied] = useState<boolean>(false);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    timeoutId = setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <TextContainer>
      <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'} arrow>
        <IconButton onClick={handleCopy} size="small">
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Text variant="body2">{text}</Text>
    </TextContainer>
  );
};
