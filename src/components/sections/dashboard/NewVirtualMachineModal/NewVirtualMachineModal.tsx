import React, { useEffect, useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import { useDispatch } from 'react-redux';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  IconButton,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import SVGIllustration from '@/assets/svg/illustration.svg';
import { addVirtualMachine } from '@/store/virtualMachinesSlice';

import {
  Container,
  EditButton,
  Field,
  Form,
  Header,
  IllustrationWrapper,
  MainContent,
  ReviewContainer,
  ReviewLabel,
  ReviewRow,
  ReviewValue,
  SidePanel,
  SidePanelContent,
} from './NewVirtualMachineModal.styles';

interface FormValues {
  name: string;
  cpu: number;
  ram: number;
  enableCpuPerformance: boolean;
}

const steps = [
  { id: 1, label: 'Virtual Machine Name' },
  { id: 2, label: 'General Settings' },
];

const Step1: React.FC<{
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}> = ({ control, errors }) => (
  <>
    <Typography variant="h6" fontWeight="bold">
      Select a name
    </Typography>
    <Typography variant="body2" color="textSecondary" mt={1}>
      A virtual machine requires storage so that you can install an operating
      system.
    </Typography>
    <Controller
      name="name"
      control={control}
      rules={{
        required: 'Name is required',
        maxLength: {
          value: 80,
          message: 'Name is too long',
        },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          label="Name"
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={
            errors.name
              ? errors.name.message
              : 'Enter unique name up to 80 characters'
          }
        />
      )}
    />
  </>
);

const Step2: React.FC<{
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  setValue: UseFormSetValue<FormValues>;
}> = ({ control, errors, setValue }) => (
  <>
    <Typography variant="h6" fontWeight="bold">
      General Settings
    </Typography>
    <Typography variant="body2" color="textSecondary" mt={0.5}>
      Configure the virtual machine hardware.
    </Typography>

    <Controller
      name="cpu"
      control={control}
      rules={{
        required: 'CPU count is required',
        min: { value: 1, message: 'Minimum 1 CPU' },
        max: { value: 12, message: 'Maximum 12 CPUs' },
      }}
      render={({ field }) => (
        <Field
          {...field}
          type="number"
          label="CPU"
          fullWidth
          margin="normal"
          error={!!errors.cpu}
          helperText={
            errors.cpu
              ? errors.cpu.message
              : 'Enter number of processors up to 12'
          }
          slotProps={{ htmlInput: { min: 1 } }}
          onChange={(e) => field.onChange(Number(e.target.value) || '')}
        />
      )}
    />

    <FormControlLabel
      control={
        <Controller
          name="enableCpuPerformance"
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      label="Enable virtualized CPU performance counters"
    />

    <Controller
      name="ram"
      control={control}
      rules={{
        required: 'RAM amount is required',
        min: { value: 1, message: 'Minimum 1 GB RAM' },
        max: { value: 50, message: 'Maximum 50 GB RAM' },
      }}
      render={({ field }) => (
        <Field
          {...field}
          type="number"
          label="RAM"
          fullWidth
          margin="normal"
          error={!!errors.ram}
          helperText={
            errors.ram ? errors.ram.message : 'Enter memory amount up to 50GB'
          }
          slotProps={{ htmlInput: { min: 1 } }}
          onChange={(e) => field.onChange(Number(e.target.value) || '')}
        />
      )}
    />

    <Box mt={2}>
      <Controller
        name="ram"
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            value={field.value ?? 1}
            track={false}
            min={0}
            max={50}
            step={1}
            onChange={(_, value) => setValue('ram', value as number)}
            valueLabelDisplay="auto"
            marks={[
              { value: 0, label: '0 GB' },
              { value: 16, label: '16 GB' },
              { value: 32, label: '32 GB' },
              { value: 50, label: '50 GB' },
            ]}
            sx={{
              height: 8,
              '& .MuiSlider-track': { backgroundColor: 'transparent' },
              '& .MuiSlider-mark': { backgroundColor: 'transparent' },
              '& .MuiSlider-rail': {
                background: `linear-gradient(
                    to right,
                    #F6EEF6 0%,
                    #F6EEF6 ${(16 / 50) * 100}%,
                    #4CAF50 ${(16 / 50) * 100}%,
                    #4CAF50 ${(32 / 50) * 100}%,
                    #FFEB3B ${(32 / 50) * 100}%,
                    #FFEB3B 100%
                  )`,
                opacity: 1,
                borderRadius: 0,
              },
            }}
          />
        )}
      />
    </Box>
  </>
);

const Step3: React.FC<{ formData: FormValues; onEdit: () => void }> = ({
  formData,
  onEdit,
}) => (
  <>
    <Typography variant="h6" fontWeight="bold">
      Ready to complete
    </Typography>
    <Typography variant="body2" color="textSecondary" mt={1}>
      Review your settings selection before finishing the wizard.
    </Typography>
    <ReviewContainer elevation={1}>
      <ReviewRow>
        <ReviewLabel>Name</ReviewLabel>
        <ReviewValue>{formData.name}</ReviewValue>
      </ReviewRow>
      <ReviewRow>
        <ReviewLabel>CPU</ReviewLabel>
        <ReviewValue>{formData.cpu}</ReviewValue>
      </ReviewRow>
      <ReviewRow>
        <ReviewLabel>RAM</ReviewLabel>
        <ReviewValue>{formData.ram} GB</ReviewValue>
      </ReviewRow>
      <EditButton size="small" color="primary" onClick={onEdit}>
        <EditIcon />
      </EditButton>
    </ReviewContainer>
  </>
);

export const NewVirtualMachineModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: { name: '', cpu: 1, ram: 16, enableCpuPerformance: false },
  });
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const formData = watch();

  const handleNext = (data: FormValues) => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      dispatch(
        addVirtualMachine({
          id: uuidv4(),
          state: 'Running',
          hostServer: '43C07-27',
          cpu: `${data.cpu} CPU`,
          memory: `${data.ram} GiB`,
          uptime: '0:00:00:00',
          alerts: { type: 'success', count: 0, label: 'All good' },
        }),
      );
      onClose();
    }
  };

  const handleBack = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  useEffect(() => {
    if (open) {
      reset();
      setStep(1);
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <Header>
        <Typography variant="subtitle2" color="inherit">
          New virtual machine
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Header>
      <Container>
        <SidePanel>
          <SidePanelContent>
            <Typography
              variant="subtitle2"
              fontWeight="regular"
              color="inherit"
            >
              Welcome to the
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="inherit"
              sx={{ fontSize: '1.375rem' }}
            >
              New Virtual Machine Wizard
            </Typography>
            <Box mt={4}>
              {steps.map((stepItem) => (
                <Typography
                  key={stepItem.id}
                  variant="body1"
                  color="inherit"
                  display="flex"
                  alignItems="center"
                  fontWeight={step === stepItem.id ? 'bold' : 'regular'}
                >
                  {step === stepItem.id && '-'}{' '}
                  {step > stepItem.id && (
                    <CheckIcon style={{ height: '1rem' }} />
                  )}{' '}
                  {stepItem.label}
                </Typography>
              ))}
            </Box>
          </SidePanelContent>
          <IllustrationWrapper>
            <SVGIllustration />
          </IllustrationWrapper>
        </SidePanel>

        <Box width="100%" maxWidth="40rem">
          <MainContent>
            <Form onSubmit={handleSubmit(handleNext)}>
              <div>
                {step === 1 && <Step1 control={control} errors={errors} />}
                {step === 2 && (
                  <Step2
                    control={control}
                    errors={errors}
                    setValue={setValue}
                  />
                )}
                {step === 3 && (
                  <Step3 formData={formData} onEdit={() => setStep(2)} />
                )}
              </div>

              <Box display="flex" justifyContent="flex-end" gap="1rem" mt={4}>
                {step > 1 && (
                  <Button onClick={handleBack} color="primary">
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid && step < 3}
                >
                  {step === 3 ? 'Create' : 'Next'}
                </Button>
              </Box>
            </Form>
          </MainContent>
        </Box>
      </Container>
    </Dialog>
  );
};
