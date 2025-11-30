'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// MUI Imports
import { Container, Typography, Card, CardActionArea, CardContent, Button, CircularProgress, Box, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';

// MUI Icon Imports
import School from '@mui/icons-material/School';
import MenuBook from '@mui/icons-material/MenuBook';
import WorkspacePremium from '@mui/icons-material/WorkspacePremium';
import Work from '@mui/icons-material/Work';

type StandardOption = '10th' | '12th' | 'Graduate' | 'Other';

export default function OnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<StandardOption | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelection = async () => {
    if (!selected) {
      toast.error('Please select an option.');
      return;
    }
    setIsLoading(true);
    // Placeholder for API call
    setTimeout(() => {
      toast.success('Selection saved!');
      router.push('/test/instructions');
      setIsLoading(false);
    }, 1000);
  };

  const options = [
    { label: '10th Standard', value: '10th', icon: <School fontSize="large" /> },
    { label: '12th Standard', value: '12th', icon: <MenuBook fontSize="large" /> },
    { label: 'Graduate', value: 'Graduate', icon: <WorkspacePremium fontSize="large" /> },
    { label: 'Other', value: 'Other', icon: <Work fontSize="large" /> },
  ];

  return (
    <Container component="main" maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom sx={{ color: 'primary.main' }}>
        Welcome! Let&apos;s get started.
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        First, please select your current educational standard to help us personalize your experience.
      </Typography>

      {/* Progress / Step Indicator */}
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h6" color="text.secondary">
          Step 1: Choose your educational standard
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      {/* Card Container */}
      <Grid container spacing={4} sx={{ justifyContent: 'center', mt: 6 }}>
        {options.map((option) => (
          <Grid item xs={12} sm={6} md={3} key={option.value}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                variant="outlined"
                sx={{
                  transition: 'transform 0.2s, border-color 0.2s',
                  borderColor: selected === option.value ? 'primary.main' : 'divider',
                  borderWidth: 2,
                  boxShadow: selected === option.value ? 6 : 2,
                  borderRadius: 2,
                  '&:hover': { boxShadow: 10, cursor: 'pointer' },
                }}
              >
                <CardActionArea onClick={() => setSelected(option.value as StandardOption)}>
                  <CardContent sx={{ pt: 4, pb: 3, textAlign: 'center' }}>
                    {option.icon}
                    <Typography variant="subtitle1" fontWeight="medium" sx={{ mt: 2 }}>
                      {option.label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Continue Button */}
      <Button
        variant="contained"
        size="large"
        onClick={handleSelection}
        disabled={!selected || isLoading}
        sx={{
          mt: 8,
          px: 6,
          py: 1.5,
          borderRadius: 3,
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Continue'}
      </Button>
    </Container>
  );
}
