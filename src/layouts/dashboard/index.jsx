import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// images or icons
import LOGO from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data/index';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';

const DashboardLayout = () => {
  const theme = useTheme();
  const [selectedNav, setSelectedNav] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          height: '100vh',
          width: 100,
          p: 2,
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          height='100%'
          justifyContent='space-between'
          width='100%'
        >
          <Stack alignItems='center' spacing={2}>
            {/* website logo */}
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                width: 64,
                height: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={LOGO} alt='logo' />
            </Box>

            {/* nav icons */}
            <Stack
              spacing={3}
              width='max-content'
              direction='column'
              alignItems='center'
            >
              {Nav_Buttons.map((btn) => (
                <Box
                  p={1}
                  sx={{
                    backgroundColor:
                      btn.index == selectedNav && theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={btn.index}
                >
                  <IconButton
                    sx={{
                      color:
                        btn.index == selectedNav || theme.palette.mode == 'dark'
                          ? '#fff'
                          : '#000',
                    }}
                    onClick={() => setSelectedNav(btn.index)}
                  >
                    {btn.icon}
                  </IconButton>
                </Box>
              ))}
              <Divider sx={{ width: '48px' }} />

              {/* settings icon */}
              <Box
                p={1}
                sx={{
                  backgroundColor:
                    selectedNav == 3 && theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{
                    color:
                      selectedNav === 3 || theme.palette.mode == 'dark'
                        ? '#fff'
                        : '#000',
                  }}
                  onClick={() => setSelectedNav(3)}
                >
                  <Gear />
                </IconButton>
              </Box>
            </Stack>
          </Stack>

          {/* theme btn and avatar */}
          <Stack spacing={4}>
            <Switch onChange={onToggleMode} defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
